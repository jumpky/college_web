import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        String inputImagePath = "tiles\\panorama3\\lq\\1.jpg"; 
        String outputDir = "tiles\\panorama3\\lq"; 
        int tileSize = 256; 

        try {
            splitImage(inputImagePath, outputDir, tileSize);
        } catch (IOException e) {
            System.err.println("Error splitting image: " + e.getMessage());
        }
    }

    public static void splitImage(String inputImagePath, String outputDir, int tileSize) throws IOException {

        File inputFile = new File(inputImagePath);
        BufferedImage image = ImageIO.read(inputFile);

        int imageWidth = image.getWidth();
        int imageHeight = image.getHeight();

        int numTilesX = (int) Math.ceil((double) imageWidth / tileSize);
        int numTilesY = (int) Math.ceil((double) imageHeight / tileSize);


        for (int y = 0; y < numTilesY; y++) {
            for (int x = 0; x < numTilesX; x++) {
                int startX = x * tileSize;
                int startY = y * tileSize;
                int width = Math.min(tileSize, imageWidth - startX);
                int height = Math.min(tileSize, imageHeight - startY);

                BufferedImage tile = image.getSubimage(startX, startY, width, height);
                String outputImagePath = outputDir + "/" + y + "-" + x + ".jpg";
                File outputFile = new File(outputImagePath);


                ImageIO.write(tile, "jpg", outputFile);

                System.out.println("Saved tile: " + outputImagePath);

            }
        }

        System.out.println("Finished splitting image");
    }
}