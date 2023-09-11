const { randomUUID } = require('crypto');

module.exports = class DatabaseMemory {
    #video = new Map()

    list() {
        return Array.from(this.#video.values());
    }

    create(video) {
        const videoId = randomUUID();

        return this.#video.set(videoId, video);
    }

    update(id, video) {
        return this.#video.set(id, video);
    }

    delete(id) {
        return this.#video.delete(id);
    }
}
