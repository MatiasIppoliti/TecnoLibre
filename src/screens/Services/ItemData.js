export const itemData = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve ( 
            [
    { id: "1", title: 'Procesador Intel Core i7 9700F', description: '4.7GHz Turbo 1151 Coffee Lake', price: "40.525", pictureUrl: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16200_Procesador_Intel_Core_i7_9700F_4.7GHz_Turbo_1151_Coffee_Lake_40da7c9b-grn.jpg', alt: "Procesador Intel Core i7", category: 'Procesadores'},

    { id: "2", title: 'Gabinete Kolink Void', description: 'ARGB ATX Vidrio Templado', price: "6.569", pictureUrl: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20250_Gabinete_Kolink_Void_ARGB_ATX_Vidrio_Templado_f962dc11-grn.jpg', alt: "Gabinete Kolink Void", category: 'Gabinetes'},

    { id: "3", title: 'Mouse Glorious Model D', description: 'Minus - Matte Black', price: "4.523", pictureUrl: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21233_Mouse_Glorious_Model_D_Minus_-_Matte_Black_ad043ce3-grn.jpg', alt: "Mouse Glorious Model D", category: 'Mouses'},

    { id: "4", title: 'Fuente ASUS ROG STRIX 750G', description: '80 Plus Gold 750W Full Modular', price: "39.321", pictureUrl: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22432_Fuente_ASUS_ROG_STRIX_750G_80_Plus_Gold_750W_Full_Modular_38c61d29-grn.jpg', alt: "Fuente ASUS ROG STRIX 750G" ,category: 'Fuentes'}
]
), 500)
})
}