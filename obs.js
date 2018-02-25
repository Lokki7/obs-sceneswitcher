let fs = require('fs');
let iconv = require('iconv-lite');
const electron = require('electron');
const {app} = electron;


class ObsRPC {

    getScenes() {
        let json = JSON.parse(fs.readFileSync(app.getPath('userData') + '\\..\\obs-studio\\basic\\scenes\\Безымянный.json'));
        return json.scene_order.map(scene => scene.name);
    }

    setScene(scene) {
        // const conv = new iconv.Iconv('windows-1251', 'utf8');
        // const body = conv.convert(scene).toString();

        fs.writeFileSync(app.getPath('userData') + '\\scene.txt', iconv.encode(scene, 'win1251'));
    }

}

module.exports = ObsRPC;