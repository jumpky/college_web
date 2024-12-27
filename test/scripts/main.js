ymaps.ready(function () {
    if (!ymaps.panorama.isSupported()) {
        alert("К сожалению, ваш браузер не поддерживает панорамы");
        return;
    }

    let player;

    function initPanorama() {
        const panoData = {

        zerPano: {
                type: 'custom',
                angularBBox: [Math.PI / 3, 2 * Math.PI + Math.PI / 4, -Math.PI / 3, Math.PI / 4],
                position: [0, 0, 0],
                tileSize: [256, 256],
                tileLevels: [{
                    getTileUrl: (x, y) => `tiles/panorama0/hq/${y}-${x}.jpg`,
                    getImageSize: () => [16384, 4096]
                }, {
                    getTileUrl: (x, y) => `tiles/panorama0/lq/${y}-${x}.jpg`,
                    getImageSize: () => [1024, 256]
                }],
                connectionArrows: [{
                    panoID: 'thrPano',
                    direction: [36, 0]
                }, {
                    panoID: 'firPano',
                    direction: [40, 0]
                }, {
                    panoID: 'cafePano',
                    direction: [36.6, 0]
                }]
            },
        firPano: {
                type: 'custom',
                angularBBox: [Math.PI / 3, 2 * Math.PI + Math.PI / 4, -Math.PI / 3, Math.PI / 4],
                position: [0, 0, 0],
                tileSize: [256, 256],
                tileLevels: [{
                    getTileUrl: (x, y) => `tiles/panorama1/hq/${y}-${x}.jpg`,
                    getImageSize: () => [8192, 2048]
                }, {
                    getTileUrl: (x, y) => `tiles/panorama1/lq/${y}-${x}.jpg`,
                    getImageSize: () => [1024, 256]
                }],
                connectionArrows: [{
                    panoID: 'zerPano',
                    direction: [80.9, 0]
                }, {
                    panoID: 'tenPano',
                    direction: [2.3, 0]
                }, {
                    panoID: 'fifPano', 
                    direction: [2.8, 0]
                }]
            },
            secPano: {
                type: 'custom',
                angularBBox: [Math.PI / 3, 2 * Math.PI + Math.PI / 4, -Math.PI / 3, Math.PI / 4],
                position: [0, 0, 0],
                tileSize: [256, 256],
                tileLevels: [{
                    getTileUrl: (x, y) => `tiles/panorama2/hq/${y}-${x}.jpg`,
                    getImageSize: () => [16384, 4096]
                }, {
                    getTileUrl: (x, y) => `tiles/panorama2/lq/${y}-${x}.jpg`,
                    getImageSize: () => [1024, 256]
                }],
                connectionArrows: [{
                    panoID: 'tenPano',  
                    direction: [59.8, 0]
                }, {
                    panoID: 'fifPano', 
                    direction: [120.17, 0]
                }]
            },
            thrPano: { 
                type: 'custom',
                angularBBox: [Math.PI / 3, 2 * Math.PI + Math.PI / 4, -Math.PI / 3, Math.PI / 4],
                position: [0, 0, 0],
                tileSize: [256, 256],
                tileLevels: [{
                    getTileUrl: (x, y) => `tiles/panorama3/hq/${y}-${x}.jpg`,
                    getImageSize: () => [8192, 2048]
                }, {
                    getTileUrl: (x, y) => `tiles/panorama3/lq/${y}-${x}.jpg`,
                    getImageSize: () => [1024, 256]
                }],
                connectionArrows: [{
                    panoID: 'zerPano',
                    direction: [80, 0]
                }, {
                    panoID: 'eigPano',
                    direction: [39, 0]
                }, {
                    panoID: 'thuPano', 
                    direction: [38.5, 0]
                }]
            },
            thuPano: {
                type: 'custom',
                angularBBox: [Math.PI / 3, 2 * Math.PI + Math.PI / 4, -Math.PI / 3, Math.PI / 4],
                position: [0, 0, 0],
                tileSize: [256, 256],
                tileLevels: [{
                    getTileUrl: (x, y) => `tiles/panorama4/hq/${y}-${x}.jpg`,
                    getImageSize: () => [8192, 2048]
                }, {
                    getTileUrl: (x, y) => `tiles/panorama4/lq/${y}-${x}.jpg`,
                    getImageSize: () => [1024, 256]
                }],
                connectionArrows: [{
                    panoID: 'sixPano', 
                    direction: [60.5, 0]
                }, {
                    panoID: 'thrPano',  
                    direction: [120.17, 0]
                }]
            },
            fifPano: {
                type: 'custom',
                angularBBox: [Math.PI / 3, 2 * Math.PI + Math.PI / 4, -Math.PI / 3, Math.PI / 4],
                position: [0, 0, 0],
                tileSize: [256, 256],
                tileLevels: [{
                    getTileUrl: (x, y) => `tiles/panorama5/hq/${y}-${x}.jpg`,
                    getImageSize: () => [8192, 2048]
                }, {
                    getTileUrl: (x, y) => `tiles/panorama5/lq/${y}-${x}.jpg`,
                    getImageSize: () => [1024, 256]
                }],
                connectionArrows: [{
                    panoID: 'secPano', 
                    direction: [60.5, 0]
                }, {
                    panoID: 'firPano',  
                    direction: [120.17, 0]
                }]
            },
            sixPano: {
                type: 'custom',
                angularBBox: [Math.PI / 3, 2 * Math.PI + Math.PI / 4, -Math.PI / 3, Math.PI / 4],
                position: [0, 0, 0],
                tileSize: [256, 256],
                tileLevels: [{
                    getTileUrl: (x, y) => `tiles/panorama6/hq/${y}-${x}.jpg`,
                    getImageSize: () => [8192, 2048]
                }, {
                    getTileUrl: (x, y) => `tiles/panorama6/lq/${y}-${x}.jpg`,
                    getImageSize: () => [1024, 256]
                }],
                connectionArrows: [{
                    panoID: 'ninPano', 
                    direction: [61.7, 0]
                }, {
                    panoID: 'thuPano',  
                    direction: [120.65, 0]
                }]
            },
            sevPano: {
                type: 'custom',
                angularBBox: [Math.PI / 3, 2 * Math.PI + Math.PI / 4, -Math.PI / 3, Math.PI / 4],
                position: [0, 0, 0],
                tileSize: [256, 256],
                tileLevels: [{
                    getTileUrl: (x, y) => `tiles/panorama7/hq/${y}-${x}.jpg`,
                    getImageSize: () => [8192, 2048]
                }, {
                    getTileUrl: (x, y) => `tiles/panorama7/lq/${y}-${x}.jpg`,
                    getImageSize: () => [1024, 256]
                }],
                connectionArrows: [{
                    panoID: 'sixPano', 
                    direction: [61.5, 0]
                }, {
                    panoID: 'thrPano',  
                    direction: [120.65, 0]
                }]
            },
            eigPano: {
                type: 'custom',
                angularBBox: [Math.PI / 3, 2 * Math.PI + Math.PI / 4, -Math.PI / 3, Math.PI / 4],
                position: [0, 0, 0],
                tileSize: [256, 256],
                tileLevels: [{
                    getTileUrl: (x, y) => `tiles/panorama8/hq/${y}-${x}.jpg`,
                    getImageSize: () => [8192, 2048]
                }, {
                    getTileUrl: (x, y) => `tiles/panorama8/lq/${y}-${x}.jpg`,
                    getImageSize: () => [1024, 256]
                }],
                connectionArrows: [{
                    panoID: 'thrPano',
                    direction: [61.5, 0]
                }, {
                    panoID: 'ninPano', 
                    direction: [121.8, 0]
                }, {
                    panoID: 'tenPano', 
                    direction: [119.5, 0]
                }, {
                    panoID: 'elePano', 
                    direction: [117, 0]
                }]
            },
            ninPano: {
                type: 'custom',
                angularBBox: [Math.PI / 3, 2 * Math.PI + Math.PI / 4, -Math.PI / 3, Math.PI / 4],
                position: [0, 0, 0],
                tileSize: [256, 256],
                tileLevels: [{
                    getTileUrl: (x, y) => `tiles/panorama9/hq/${y}-${x}.jpg`,
                    getImageSize: () => [8192, 2048]
                }, {
                    getTileUrl: (x, y) => `tiles/panorama9/lq/${y}-${x}.jpg`,
                    getImageSize: () => [1024, 256]
                }],
                connectionArrows: [{
                    panoID: 'sixPano', 
                    direction: [61.5, 0]
                }, {
                    panoID: 'eigPano', 
                    direction: [120.2, 0]
                }]
            },
            tenPano: {
                type: 'custom',
                angularBBox: [Math.PI / 3, 2 * Math.PI + Math.PI / 4, -Math.PI / 3, Math.PI / 4],
                position: [0, 0, 0],
                tileSize: [256, 256],
                tileLevels: [{
                    getTileUrl: (x, y) => `tiles/panorama10/hq/${y}-${x}.jpg`,
                    getImageSize: () => [8192, 2048]
                }, {
                    getTileUrl: (x, y) => `tiles/panorama10/lq/${y}-${x}.jpg`,
                    getImageSize: () => [1024, 256]
                }],
                connectionArrows: [{
                    panoID: 'secPano', 
                    direction: [119.5, 0]
                }, {
                    panoID: 'eigPano', 
                    direction: [60.5, 0]
                }]
            },
            elePano: {
                type: 'custom',
                angularBBox: [Math.PI / 3, 2 * Math.PI + Math.PI / 4, -Math.PI / 3, Math.PI / 4],
                position: [0, 0, 0],
                tileSize: [256, 256],
                tileLevels: [{
                    getTileUrl: (x, y) => `tiles/panorama11/hq/${y}-${x}.jpg`,
                    getImageSize: () => [16384, 4096]
                }, {
                    getTileUrl: (x, y) => `tiles/panorama11/lq/${y}-${x}.jpg`,
                    getImageSize: () => [1024, 256]
                }],
                connectionArrows: [{
                    panoID: 'eigPano', 
                    direction: [121, 0]
                }]
            },
            cafePano: {
                type: 'custom',
                angularBBox: [Math.PI / 3, 2 * Math.PI + Math.PI / 4, -Math.PI / 3, Math.PI / 4],
                position: [0, 0, 0],
                tileSize: [256, 256],
                tileLevels: [{
                    getTileUrl: (x, y) => `tiles/panorama12/hq/${y}-${x}.jpg`,
                    getImageSize: () => [8192, 2048]
                }, {
                    getTileUrl: (x, y) => `tiles/panorama12/lq/${y}-${x}.jpg`,
                    getImageSize: () => [1024, 256]
                }],
                connectionArrows: [{
                    panoID: 'zerPano', 
                    direction: [11, 0]
                }]
            },
            
        };
    
            function getConnectedPanoramaData(panoID) {
            return panoData[panoID];
          }
      
          function ConnectionArrow(currentPanorama, direction, nextPanorama) {
            this.properties = new ymaps.data.Manager();
            this._currentPanorama = currentPanorama;
            this._direction = direction;
            this._connectedPanorama = nextPanorama;
          }
      
          ymaps.util.defineClass(ConnectionArrow, {
            getConnectedPanorama: function () {
              return this._connectedPanorama.type === "custom"
                ? ymaps.vow.resolve(new MyPanorama(this._connectedPanorama))
                : this._connectedPanorama.type === "flat"
                    ? ymaps.vow.resolve(new MyFlatPanorama(this._connectedPanorama))
                : ymaps.vow.reject(new Error("Неверный тип панорамы"));
            },
            getDirection: function () {
              return this._direction;
            },
            getPanorama: function () {
              return this._currentPanorama;
            }
          });
      
          function MyPanorama(obj) {
              ymaps.panorama.Base.call(this);
              this._angularBBox = obj.angularBBox;
              this._position = obj.position;
              this._tileSize = obj.tileSize;
              this._tileLevels = obj.tileLevels;
              this._connectionArrows = obj.connectionArrows.map(
                  (arrow) => new ConnectionArrow(this, arrow.direction, getConnectedPanoramaData(arrow.panoID))
              );
          }
      
          ymaps.util.defineClass(MyPanorama, ymaps.panorama.Base, {
              getConnectionArrows: function () { return this._connectionArrows; },
              getAngularBBox: function () { return this._angularBBox; },
              getPosition: function () { return this._position; },
              getTileSize: function () { return this._tileSize; },
              getTileLevels: function () { return this._tileLevels; },
              getCoordSystem: function () { return ymaps.coordSystem.cartesian; }
          });

            function MyFlatPanorama(obj) {
              ymaps.panorama.Base.call(this);
              this._imageUrl = obj.imageUrl;
              this._position = obj.position;
              this._connectionArrows = obj.connectionArrows.map(
                (arrow) => new ConnectionArrow(this, arrow.direction, getConnectedPanoramaData(arrow.panoID))
              );
            }

        ymaps.util.defineClass(MyFlatPanorama, ymaps.panorama.Base, {
            getConnectionArrows: function () { return this._connectionArrows; },
            getPosition: function () { return this._position; },
            getImageUrl: function () { return this._imageUrl },
             getCoordSystem: function () { return ymaps.coordSystem.cartesian; }
          });

          const panorama = new MyPanorama(panoData.zerPano);
          player = new ymaps.panorama.Player("player", panorama, {
            controls: [],
            direction: [12.5, 0],
            span: [90, 60]
          });


    document
        .getElementById("zoomInButton")
        .addEventListener("click", function () {
        try {
            const currentSpan = player.getSpan();

            const newSpan = [
                Math.max(currentSpan[0] * 0.7, 10),
                Math.max(currentSpan[1] * 0.7, 10),
            ];
            player.setSpan(newSpan);
        } catch (e) {
            console.error("Ошибка при приближении:", e);
        }
        });

    document
        .getElementById("zoomOutButton")
        .addEventListener("click", function () {
        try {
            const currentSpan = player.getSpan();
            const newSpan = [
                Math.min(currentSpan[0] * 1.3, 150),
                Math.min(currentSpan[1] * 1.3, 120),
            ];
            player.setSpan(newSpan);
        } catch (e) {
            console.error("Ошибка при отдалении:", e);
        }
        });

    player.events.add("error", function (error) {
        console.error("Ошибка панорамы:", error);
    });
    player.events.add("ready", function () {
        console.log("Панорама загружена и готова к использованию");
    });
  }
  initPanorama();
});