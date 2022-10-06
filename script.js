const checkOnKeyUp = (inputdata) => {
    // get input value
    if (inputdata) {
        const keyword = inputdata.value;

        // search mahasiswa using keyword
        const mahasiswas = aegis.filter((item) => {
            return item.nim % 2 == 0 && (
                (item.nama_lengkap
                        .toLowerCase()
                        .includes(keyword.toLowerCase())) ||
                (item.nama_panggilan
                    .toLowerCase()
                    .includes(keyword.toLowerCase())) ||
                (item.nomor_telepon &&
                    item.nomor_telepon
                        .toString()
                        .toLowerCase()
                        .includes(keyword.toLowerCase())) ||
                (item.id_line &&
                    item.id_line
                        .toString()
                        .toLowerCase()
                        .includes(keyword.toLowerCase())) ||
                (item.tanggal_lahir &&
                    item.tanggal_lahir
                        .toString()
                        .toLowerCase()
                        .includes(keyword.toLowerCase())) ||
                (item.nim &&
                    item.nim
                        .toString()
                        .toLowerCase()
                        .includes(keyword.toLowerCase())) ||
                (item.email &&
                    item.email
                        .toString()
                        .toLowerCase()
                        .includes(keyword.toLowerCase())) ||
                (item.hobi &&
                    item.hobi
                        .toString()
                        .toLowerCase()
                        .includes(keyword.toLowerCase()))
            );
        });

        const resultContainer = document.getElementById("result");
        resultContainer.innerHTML = "";

        if (!keyword) {
            const notFoundElement = document.createElement("p");

            notFoundElement.innerHTML = "Harap masukkan kata kunci";

            resultContainer.appendChild(notFoundElement);
        } else {
            if (mahasiswas.length === 0) {
                const notFoundElement = document.createElement("p");

                notFoundElement.innerHTML = `Hasil pencarian untuk kata kunci "${keyword}" tidak ditemukan`;

                resultContainer.appendChild(notFoundElement);
            } else {
                for (const mahasiswa of mahasiswas) {
                    const card = document.createElement("div");
                    const namaParagraph = document.createElement("p");
                    const panggilanParagraph = document.createElement("p");
                    const teleponParagraph = document.createElement("p");
                    const lineParagraph = document.createElement("p");
                    const tanggalParagraph = document.createElement("p");
                    const nimParagraph = document.createElement("p");
                    const emailParagraph = document.createElement("p");
                    const hobiParagraph = document.createElement("p");

                    card.style =
                        "margin-bottom: 2rem; background: #eee; padding: 12px; width: 100%; border-radius: 8px;";
                    namaParagraph.style = "font-size: 20px; font-weight: bold";

                    namaParagraph.innerHTML = mahasiswa.nama_lengkap;
                    panggilanParagraph.innerHTML = mahasiswa.nama_panggilan;
                    teleponParagraph.innerHTML = mahasiswa.nomor_telepon;
                    lineParagraph.innerHTML = mahasiswa.id_line;
                    tanggalParagraph.innerHTML = mahasiswa.tanggal_lahir;
                    nimParagraph.innerHTML = mahasiswa.nim;
                    emailParagraph.innerHTML = mahasiswa.email;
                    hobiParagraph.innerHTML = mahasiswa.hobi;

                    card.appendChild(namaParagraph);
                    card.appendChild(panggilanParagraph);
                    card.appendChild(teleponParagraph);
                    card.appendChild(lineParagraph);
                    card.appendChild(tanggalParagraph);
                    card.appendChild(nimParagraph);
                    card.appendChild(emailParagraph);
                    card.appendChild(hobiParagraph);

                    resultContainer.appendChild(card);
                }
            }
        }
    }
};

checkOnKeyUp();
