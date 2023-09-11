const { randomUUID } = require('crypto');

module.exports = class DatabaseMemory {
    #video = new Map()

    list(search) {
        return Array.from(this.#video.entries())
            .map((videoArray) => {
                const id = videoArray[0];
                const data = videoArray[1];

                return {
                    id,
                    ...data,
                }
            })
            .filter((video) => {
                if (search) {
                    return video.title.includes(search);
                }

                return true
            });
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
