class ObsScenes {
    constructor() {
        this.scenes = ['Disable switch'];
        this.activeScene = '';
        this.loadScenes();
    }

    loadScenes() {
        fetch('/scenes')
            .then(data => data.json())
            .then(scenes => this.setScenes(scenes));
    }

    setScenes(value) {
        this.scenes.push(...value);
    }

    switchToScene(scene) {
        this.activeScene = scene;
        fetch("/scene", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({scene})
        });
    }

    getScenes() {
        return this.scenes;
    }
}
