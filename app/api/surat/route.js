// import { NextResponse } from "next/server";
// import { prisma } from "../../../lib/prisma";
// import { generateNomorSurat } from "../../../utils/generateNomorSurat";

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { judul, pengirim, jenis, tujuan, departemen, isi, createdBy } = body;

//     if (!judul || !pengirim || !jenis || !tujuan || !departemen || !isi) {
//       return NextResponse.json({ error: "Semua field wajib diisi" }, { status: 400 });
//     }

//     // generate nomor otomatis
//     const refNumber = await generateNomorSurat(departemen);

//     const surat = await prisma.surat.create({
//       data: {
//         judul,
//         pengirim,
//         jenis,
//         tujuan,
//         refNumber,      // pakai yang auto generate
//         departemen,
//         isi,
//         createdBy: createdBy || "dummyUser",
//       },
//     });

//     return NextResponse.json(surat, { status: 201 });
//   } catch (error) {
//     console.error("Error creating surat:", error);
//     return NextResponse.json({ error: "Gagal membuat surat", details: error.message }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import { generateNomorSurat } from "../../../utils/generateNomorSurat";

export async function POST(req) {
  try {
    const body = await req.json();
    const { judul, tujuan, isi, pengirim, jenis, departemen, createdBy } = body;

    if (!judul || !tujuan || !isi || !pengirim || !jenis || !departemen) {
      return NextResponse.json({ error: "Semua field wajib diisi" }, { status: 400 });
    }

    // generate nomor final
    const refNumber = await generateNomorSurat(departemen);

    const surat = await prisma.surat.create({
      data: {
        judul,
        tujuan,
        isi,
        pengirim,
        jenis,
        departemen,
        refNumber,
        createdBy: createdBy || "dummyUser",
        status: "FINAL",
      },
    });

    return NextResponse.json(surat, { status: 201 });
  } catch (err) {
    console.error("Error saving surat:", err);
    return NextResponse.json(
      { error: "Gagal simpan surat", detail: err.message },
      { status: 500 }
    );
  }
}
