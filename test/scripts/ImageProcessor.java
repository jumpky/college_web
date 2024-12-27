import javax.imageio.IIOImage;
import javax.imageio.ImageIO;
import javax.imageio.ImageWriteParam;
import javax.imageio.ImageWriter;
import javax.imageio.stream.FileImageOutputStream;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.Iterator;

public class ImageProcessor {

    public static void main(String[] args) {
        String inputImagePath = "F:\\college_web-main\\test\\tiles\\panorama13\\13.jpg"; 
        try {
            processImage(inputImagePath);
        } catch (IOException e) {
            System.err.println("Error processing image: " + e.getMessage());
        }
    }

    public static void processImage(String inputImagePath) throws IOException {
        File inputFile = new File(inputImagePath);
        if (!inputFile.exists() || !inputFile.isFile()) {
            System.err.println("Error: Invalid input file path.");
            return;
        }

        BufferedImage originalImage = ImageIO.read(inputFile);
        if (originalImage == null) {
            System.err.println("Error: Could not read the image file.");
            return;
        }


        String outputDir = inputFile.getParentFile().getAbsolutePath();

        String hqDir = outputDir + "/hq";
        String lqDir = outputDir + "/lq";
        new File(hqDir).mkdirs();
        new File(lqDir).mkdirs();
        int originalWidth = originalImage.getWidth();
        int originalHeight = originalImage.getHeight();

        // Обработка HQ изображений
        processAndSaveTiles(originalImage, hqDir, 256,256);

        // Создание и обработка LQ изображений
        BufferedImage lqImage = resizeImage(originalImage, 1024, 512);

         processAndSaveTiles(lqImage, lqDir, 256,256);

        System.out.println("Finished processing image.");
    }

    private static void processAndSaveTiles(BufferedImage image, String outputDir, int tileWidth, int tileHeight) throws IOException {
         int imageWidth = image.getWidth();
        int imageHeight = image.getHeight();

        int numTilesX = (int) Math.ceil((double) imageWidth / tileWidth);
        int numTilesY = (int) Math.ceil((double) imageHeight / tileHeight);


        for (int y = 0; y < numTilesY; y++) {
            for (int x = 0; x < numTilesX; x++) {
                int startX = x * tileWidth;
                int startY = y * tileHeight;
                int width = Math.min(tileWidth, imageWidth - startX);
                int height = Math.min(tileHeight, imageHeight - startY);

                BufferedImage tile = image.getSubimage(startX, startY, width, height);
                 String outputImagePath = outputDir + "/" +  y + "-" + x + ".jpg";
                File outputFile = new File(outputImagePath);
                ImageIO.write(tile, "jpg", outputFile);

                System.out.println("Saved tile: " + outputImagePath);

            }
        }
    }


    private static BufferedImage resizeImage(BufferedImage originalImage, int targetWidth, int targetHeight) {
        BufferedImage resizedImage = new BufferedImage(targetWidth, targetHeight, BufferedImage.TYPE_INT_RGB);
        Graphics2D g2d = resizedImage.createGraphics();
        g2d.drawImage(originalImage, 0, 0, targetWidth, targetHeight, null);
        g2d.dispose();
        return resizedImage;
    }

}