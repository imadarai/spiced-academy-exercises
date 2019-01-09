const {getAlbumNames} = require('./albums');
const spotify = require('./spotify');

jest.mock('./spotify');

test('album names are in alphabetical order', () => {
    spotify.search.mockResolvedValue({
        albums: {
            items: [
                { name: "Apple" },
                { name: "Cars and Cats" },
                { name: "Dada Music" },
                { name: "French Fries" }
            ]
        }
    });
    return getAlbumNames("meat loaf").then(albumNames => {
        expect(albumNames).toEqual(albumNames.sort());
    });
});
