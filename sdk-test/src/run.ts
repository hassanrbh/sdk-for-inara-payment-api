import Inara from "@inara/sdk";

const client = new Inara({
  privateKey:
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2Njc2NjE2MzEsImlhdCI6MTY2NzY1ODAzMX0.-WWHucVPOnFxtBE8RZlSfPuaImk_tO3ahtF4wniy7a8",
});

client.Interseptors({ status: "verifie" });
// client.getBooks({ limit: 1 }).then((res) => console.log(res))

// const res = client.createBookandGetBalance({
//   title: "karime book",
//   active: true,
//   author_cut: "2",
//   book_image: "https://google.com",
//   epub: "0o3131",
//   isbn: "122331",
//   price: "20",
//   keywords: "sdk, api",
//   published: true,
//   reference_number: "23313",
//   slug: "sidn",
//   status: "verified",
//   summary: "hello this is my book",
// });

// console.log(res);
