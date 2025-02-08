function tutarHesapla(yardimYapanlar) {
 /* kodlar buraya */
 yardimYapanlar = yardimYapanlar.join('').toLowerCase();
 let adet = 0;
 for (let i = 0; i < yardimYapanlar.length; i++) {
   if (
     yardimYapanlar.charAt(i) === 'a' ||
     yardimYapanlar.charAt(i) === 'h' ||
     yardimYapanlar.charAt(i) === 'm' ||
     yardimYapanlar.charAt(i) === 'e' ||
     yardimYapanlar.charAt(i) === 't'
   ) {
     adet++;
   }
 }
 return adet * 1000;
}
