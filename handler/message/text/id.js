exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas sticker yang anda buat dari bot ini serta video, gambar maupun data lainnya yang anda dapatkan dari Source code / bot ini.
- Source code / bot tidak boleh digunakan untuk layanan yang bertujuan/berkontribusi dalam: 
    • seks / perdagangan manusia
    • perjudian
    • perilaku adiktif yang merugikan 
    • kejahatan
    • kekerasan (kecuali jika diperlukan untuk melindungi keselamatan publik)
    • pembakaran hutan / penggundulan hutan
    • ujaran kebencian atau diskriminasi berdasarkan usia, jenis kelamin, identitas gender, ras, seksualitas, agama, kebangsaan

Source Code BOT : https://github.com/YogaSakti/imageToSticker
NodeJS WhatsApp library: https://github.com/open-wa/wa-automate-nodejs

Best regards, Yoga Sakti.`
}

exports.textMenu = (pushname) => {
    return `
Olá, ${pushname}! 👋️
Aqui estão alguns dos recursos deste bot!! ✨

Sticker Creator:
1. *#sticker*
Para transformar a imagem em uma figurinha 
Uso: Enviar imagens com a legenda #sticker ou responder as imagens que foi enviada com #sticker

2. *#sticker* _<Url Gambar>_
Para converter o link da imagem para uma figurinha 
Uso: Bota o #sticker + o link da imagem  

3. *#gifsticker* _<Giphy URL>_ / *#stickergif* _<Giphy URL>_
Para transformar o GIF em uma figurinha (Giphy apenas)
Uso: Enviar mensagem no formato *gifsticker https://media.giphy.com/media/JUvI2c1ddyzkwK4RlV/giphy.gif*

4. *#memesticker* _<texto superior>_ | _<texto inferior>_
Para fazer um meme de adesivo com texto superior e inferior 
Uso: Enviar imagem com legenda _*#algo escrito aqui | algo escrito aqui*_, ou você pode responder uma imagem enviada.

Downloads:
1. *#tiktok* _<link do titktok>_
Para baixar videos do tiktok.
Uso: Enviar mensagem com o formato *#tiktok https://www.tiktok.com/@itsandani/video/6869248690381425922* 

2. *#fb* _<link da postagem ou video>_
Para baixar videos do Zuckerbook.
Uso: Enviar mensagem com o formato *#fb https://www.facebook.com/.....*

3. *#ig* _<link da postagem do insta>_
Para baixar fotos e videos do Instagram
Uso: Enviar mensagem com o formato *#ig https://www.instagram.com/p/BPOd1vhDMIp/*

4. *#twt* _<link do post do twitter>_
Para baixar fotos e videos do Twitter
Uso: Enviar mensagem com o formato *#twt https://twitter.com/ntsana_/status/1306108656887324672*

Outros..
1. *#translate* _<código do idioma>_
Para traduzir mensagens no idioma especificado
Uso: Responder / citar / responder a mensagem que você deseja traduzir com _*#translate id*_ <- id é o codigo do idioma. O codigo do idioma pode ser visto em *https://bit.ly/33FVldE*

2. *#resi* _<kurir>_ _<nomer resi>_ Vbeta 
Untuk memeriksa status pengiriman barang, daftar kurir: jne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex.
Penggunaan: kirim pesan dengan format _*#resi jne 1238757632*_

3. *#meme* _<texto superior>_ | _<texto inferior>_
Para criar meme com texto superior e inferior
Uso: Enviar imagem com legenda _*#algo escrito aqui | algo escrito aqui *_, Ou você pode responder uma mensagem enviada.

4. *#ceklokasi*
Verificar a localização da propagação de covid-19 na área ao seu redor (beta)
Uso: Enviar sua localização _*#ceklokasi*_

5. *#tnc*
Termos e condições do bot.

6. *#donasi*
Exibir informações de doação.

Espero que tenha um ótimo dia!✨`
}

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah beberapa fitur admin grup yang ada pada bot ini!

1. *#kick* @user
Untuk mengeluarkan member dari grup (bisa lebih dari 1).

2. *#promote* @user
Untuk mempromosikan member menjadi Admin grup.

3. *#demote* @user
Untuk demosikan Admin grup.

4. *#tagall*
Untuk mention semua member grup. (Premium Only)

5. *#del*
Untuk menghapus pesan bot (balas pesan bot dengan #del)`
}

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi melalui link berikut:
1. Saweria: https://saweria.co/yogasakti
2. Trakteer: https://trakteer.id/red-emperor 

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih.`
}
