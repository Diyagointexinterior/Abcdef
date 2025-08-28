var APP_DATA = {
  "scenes": [
    {
      "id": "0-baywindow",
      "name": "BayWindow",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.14334768314407498,
          "pitch": 0.3283297460211827,
          "rotation": 4.71238898038469,
          "target": "1-cot"
        },
        {
          "yaw": -0.8674154210122804,
          "pitch": 0.3736790464211879,
          "rotation": 3.141592653589793,
          "target": "2-dressing"
        },
        {
          "yaw": 0.45083613420237256,
          "pitch": 0.1895716648411252,
          "rotation": 7.853981633974483,
          "target": "3-tv--wardrobe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cot",
      "name": "Cot",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.5658192297768458,
          "pitch": 0.09902358270135636,
          "rotation": 1.5707963267948966,
          "target": "0-baywindow"
        },
        {
          "yaw": 0.162867492116046,
          "pitch": 0.47725062118955464,
          "rotation": 3.141592653589793,
          "target": "3-tv--wardrobe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dressing",
      "name": "Dressing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.08418261761028312,
          "pitch": 0.6116853509657929,
          "rotation": 3.141592653589793,
          "target": "0-baywindow"
        },
        {
          "yaw": -0.4562186666084429,
          "pitch": 0.14841078926993845,
          "rotation": 4.71238898038469,
          "target": "3-tv--wardrobe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-tv--wardrobe",
      "name": "Tv & Wardrobe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.9139161641568734,
          "pitch": 0.21882209514782325,
          "rotation": 7.853981633974483,
          "target": "2-dressing"
        },
        {
          "yaw": 0.13681583471822556,
          "pitch": 0.6393551473524077,
          "rotation": 3.141592653589793,
          "target": "1-cot"
        },
        {
          "yaw": -0.7839158978838938,
          "pitch": 0.14213363489273334,
          "rotation": 4.71238898038469,
          "target": "0-baywindow"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
