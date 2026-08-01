export default function TermsText() {
    return (
        <div className="px-6 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl text-lg">
            {/* header */}
            <div className="mb-14 mt-10">
                <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#7F55B1]">
                    Legal
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                    Ketentuan Penggunaan
                </h1>
            </div>

            {/* intro */}
            <section className="mb-12">
                <p className="leading-relaxed text-foreground/90">
                    Selamat datang di Sikagig. Sikagig adalah platform yang mempertemukan Juragan, yaitu orang
                    yang butuh bantuan untuk sebuah tugas, dengan Jagoan, yaitu orang yang siap mengerjakannya.
                    Ketentuan Penggunaan ini adalah perjanjian antara Anda dan Sikagig, layanan yang
                    dioperasikan oleh PT Sikagig Berkah Nusantara, yang mengatur cara Anda memakai aplikasi
                    dan situs kami.
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                    Dengan mendaftar atau menggunakan Sikagig, Anda menyatakan telah membaca, memahami, dan
                    menyetujui ketentuan ini beserta{" "}
                    <a href="/privacy" className="text-[#7F55B1] underline underline-offset-4 hover:text-[#A685E2]">
                        Kebijakan Privasi
                    </a>{" "}
                    kami. Kalau ada bagian yang tidak Anda setujui, sebaiknya jangan menggunakan layanan ini.
                    Ketentuan ini mengacu pada hukum yang berlaku di Indonesia, termasuk Undang-Undang tentang
                    Informasi dan Transaksi Elektronik (UU ITE) serta peraturan perlindungan konsumen.
                </p>
            </section>

            {/* 1 */}
            <section className="mb-12">
                <h2 className="mb-5 text-xl font-semibold text-foreground">
                    1. Peran Sikagig
                </h2>
                <p className="text-muted">
                    Sikagig adalah penyedia platform yang menghubungkan Juragan dan Jagoan. Kami menyediakan
                    tempat untuk memposting gig, mengajukan penawaran, berkomunikasi, dan menahan pembayaran
                    lewat sistem escrow sampai pekerjaan selesai. Namun perjanjian atas pekerjaan itu sendiri
                    terjadi langsung antara Juragan dan Jagoan.
                </p>
                <p className="mt-3 text-muted">
                    Artinya, Sikagig bukan pemberi kerja, bukan penyedia jasa yang dimaksud, dan bukan pihak
                    dalam kesepakatan antara pengguna. Kami tidak menjamin kualitas, keamanan, atau legalitas
                    pekerjaan yang ditawarkan atau dikerjakan pengguna. Tanggung jawab atas isi gig, cara
                    pengerjaan, dan hasilnya ada pada Juragan dan Jagoan yang bersangkutan. Peran kami adalah
                    menjaga agar transaksi berjalan adil, uang aman di escrow, dan ada jalur penyelesaian jika
                    terjadi sengketa.
                </p>
            </section>

            {/* 2 */}
            <section className="mb-12">
                <h2 className="mb-5 text-xl font-semibold text-foreground">
                    2. Akun dan Kelayakan
                </h2>
                <p className="text-muted">
                    Untuk memakai Sikagig, Anda harus berusia minimal 17 tahun dan mampu membuat perjanjian
                    yang sah secara hukum. Saat mendaftar, Anda wajib memberikan data yang benar dan
                    memperbaruinya bila ada perubahan. Satu orang menggunakan satu akun, dan akun tidak untuk
                    diperjualbelikan atau dipinjamkan ke orang lain.
                </p>
                <p className="mt-3 text-muted">
                    Anda bertanggung jawab menjaga keamanan akun, termasuk kata sandi dan kode OTP. Setiap
                    aktivitas yang terjadi dari akun Anda dianggap dilakukan oleh Anda. Demi keamanan, kami
                    tidak akan pernah meminta kata sandi atau OTP Anda, jadi jangan pernah membagikannya ke
                    siapa pun, bahkan ke orang yang mengaku dari pihak Sikagig.
                </p>
            </section>

            {/* 3 */}
            <section className="mb-12">
                <h2 className="mb-5 text-xl font-semibold text-foreground">
                    3. Gig, Penawaran, dan Jasa
                </h2>
                <p className="text-muted">
                    Juragan memposting gig dengan menjelaskan tugas, anggaran, dan batas waktu. Sebuah gig
                    bisa ditujukan untuk satu Jagoan, atau berupa gig banyak jagoan (multi-spot) yang bisa
                    dikerjakan beberapa orang sekaligus. Jagoan dapat mengajukan penawaran (bid) atau mengambil
                    spot yang tersedia. Kesepakatan terbentuk saat Juragan menerima penawaran atau saat Jagoan
                    mengambil spot, dan sejak itu kedua pihak terikat untuk menjalankan apa yang sudah
                    disepakati.
                </p>
                <p className="mt-3 text-muted">
                    Jagoan mengerjakan tugas sesuai instruksi, lalu mengunggah bukti penyelesaian. Juragan
                    kemudian meninjau hasilnya untuk menyetujui, meminta revisi, atau, jika ada masalah,
                    mengajukan sengketa. Selain gig, Jagoan juga dapat menawarkan jasa melalui daftar layanan,
                    dan alur kesepakatannya pada dasarnya sama. Pastikan detail tugas, hasil yang diharapkan,
                    dan bukti yang diminta dijelaskan sejelas mungkin sejak awal agar tidak menimbulkan salah
                    paham.
                </p>
            </section>

            {/* 4 */}
            <section className="mb-12">
                <h2 className="mb-5 text-xl font-semibold text-foreground">
                    4. Dompet, Escrow, dan Pembayaran
                </h2>
                <p className="text-muted">
                    Pembayaran di Sikagig berjalan lewat dompet digital di dalam aplikasi. Juragan mengisi
                    saldo dompet terlebih dahulu, lalu saat sebuah gig disepakati, dana sebesar nilai gig
                    ditahan di escrow. Selama ditahan, dana itu tidak bisa dipakai untuk hal lain dan juga
                    belum diterima Jagoan. Tujuannya sederhana: Jagoan tenang karena uangnya sudah diamankan,
                    dan Juragan tenang karena dana baru cair setelah pekerjaan beres.
                </p>
                <p className="mt-3 text-muted">
                    Dana di escrow diteruskan ke Jagoan setelah Juragan menyetujui hasil pekerjaan. Jika dalam
                    jangka waktu tertentu Juragan tidak meninjau hasil yang sudah dikirim, sistem dapat
                    menyetujuinya secara otomatis agar hak Jagoan tidak tertahan. Sikagig memungut komisi atau
                    biaya layanan dari setiap transaksi yang berhasil, yang besarnya ditampilkan secara
                    transparan di aplikasi sebelum Anda sepakat. Penarikan saldo ke rekening bank dapat
                    diajukan kapan saja sesuai ketentuan dan batas minimum yang berlaku, dan dapat dikenakan
                    biaya penarikan yang juga kami tampilkan lebih dulu.
                </p>
            </section>

            {/* 5 */}
            <section className="mb-12">
                <h2 className="mb-5 text-xl font-semibold text-foreground">
                    5. Aturan Main: yang Tidak Boleh
                </h2>
                <p className="mb-4 text-muted">
                    Sikagig untuk tugas yang wajar dan halal. Agar platform tetap aman dan nyaman buat semua
                    orang, Anda setuju untuk tidak memakai Sikagig untuk hal-hal berikut:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-muted">
                    <li>
                        Memposting atau mengerjakan tugas yang melanggar hukum, atau yang berkaitan dengan
                        barang dan jasa ilegal.
                    </li>
                    <li>
                        Menjual, membeli, menyewa, atau membuat akun orang lain maupun akun massal, termasuk
                        akun email, media sosial, atau layanan pihak ketiga.
                    </li>
                    <li>
                        Penipuan, skema yang menyesatkan, jagoan ujian atau tugas akademik yang dikerjakan dari
                        nol untuk menggantikan orang lain, serta segala bentuk kecurangan.
                    </li>
                    <li>
                        Konten seksual, kekerasan, pelecehan, atau hal yang membahayakan keselamatan orang lain.
                    </li>
                    <li>
                        Ujaran kebencian, penghinaan, provokasi, atau diskriminasi yang menyinggung atau
                        menyerang suku, agama, ras, dan antargolongan (SARA).
                    </li>
                    <li>
                        Skema piramida, money game, atau penipuan berkedok investasi maupun perekrutan.
                    </li>
                    <li>
                        Mengajak pengguna lain bertransaksi atau berkomunikasi di luar Sikagig untuk menghindari
                        escrow, dan membagikan kontak pribadi sebelum kesepakatan terjadi.
                    </li>
                    <li>
                        Menyamarkan maksud yang dilarang dengan tulisan yang diacak, deskripsi yang sengaja
                        dikosongkan, atau menyembunyikan instruksi asli di lampiran.
                    </li>
                </ul>
                <p className="mt-4 text-muted">
                    Pada akhirnya, Anda yang bertanggung jawab penuh atas gig yang Anda posting dan tugas yang
                    Anda kerjakan. Pastikan semuanya legal dan sesuai dengan hukum yang berlaku.
                </p>
            </section>

            {/* 6 */}
            <section className="mb-12">
                <h2 className="mb-5 text-xl font-semibold text-foreground">
                    6. Moderasi dan Penegakan
                </h2>
                <p className="text-muted">
                    Untuk menjaga aturan main di atas, kami memakai kombinasi moderasi otomatis dan peninjauan
                    manual. Kami dapat menolak atau menurunkan gig, menahan pencairan dana, membatasi fitur,
                    hingga menangguhkan atau menutup akun yang melanggar ketentuan ini, dengan atau tanpa
                    pemberitahuan terlebih dahulu, tergantung tingkat keparahannya. Kami berusaha bersikap
                    adil, tetapi keputusan akhir mengenai apa yang boleh ada di platform berada di tangan kami.
                </p>
            </section>

            {/* 7 */}
            <section className="mb-12">
                <h2 className="mb-5 text-xl font-semibold text-foreground">
                    7. Penyelesaian Sengketa Antar Pengguna
                </h2>
                <p className="text-muted">
                    Jika Juragan dan Jagoan berselisih soal hasil pekerjaan, salah satu pihak dapat mengajukan
                    sengketa selama dana masih ditahan di escrow. Saat sengketa berjalan, dana tetap ditahan
                    sampai ada keputusan. Tim Sikagig akan meninjau bukti dari kedua pihak dan menjadi
                    penengah.
                </p>
                <p className="mt-3 text-muted">
                    Keputusan Sikagig atas pembagian dana escrow dalam sebuah sengketa bersifat final dan
                    mengikat agar persoalan tidak menggantung. Karena itu, sampaikan keterangan dan bukti
                    secara jujur. Memberikan bukti palsu atau menyalahgunakan proses sengketa adalah
                    pelanggaran ketentuan ini dan dapat berakibat pada penindakan akun.
                </p>
            </section>

            {/* 8 */}
            <section className="mb-12">
                <h2 className="mb-5 text-xl font-semibold text-foreground">
                    8. Verifikasi Identitas (KYC)
                </h2>
                <p className="text-muted">
                    Verifikasi identitas bersifat opsional. Pengguna yang menyelesaikannya mendapat badge
                    terverifikasi sehingga lebih dipercaya pengguna lain. Bagaimana kami memproses dan
                    menyimpan data KYC dijelaskan pada{" "}
                    <a href="/privacy" className="text-[#7F55B1] underline underline-offset-4 hover:text-[#A685E2]">
                        Kebijakan Privasi
                    </a>
                    . Singkatnya, foto KTP dan selfie hanya dipakai untuk verifikasi dan dihapus dari
                    penyimpanan aktif setelah prosesnya selesai.
                </p>
            </section>

            {/* 9 */}
            <section className="mb-12">
                <h2 className="mb-5 text-xl font-semibold text-foreground">
                    9. Hak Kekayaan Intelektual
                </h2>
                <p className="text-muted">
                    Nama, logo, tampilan, dan seluruh perangkat lunak Sikagig adalah milik kami dan dilindungi
                    hukum. Anda tidak boleh menyalin, memodifikasi, atau memakainya tanpa izin. Konten yang
                    Anda unggah, seperti deskripsi gig, foto, dan bukti pekerjaan, tetap milik Anda. Namun
                    dengan mengunggahnya, Anda memberi Sikagig izin untuk menyimpan dan menampilkan konten
                    tersebut sejauh diperlukan untuk menjalankan layanan, misalnya menampilkan gig Anda ke
                    calon Jagoan.
                </p>
            </section>

            {/* 10 */}
            <section className="mb-12">
                <h2 className="mb-5 text-xl font-semibold text-foreground">
                    10. Penafian dan Batasan Tanggung Jawab
                </h2>
                <p className="text-muted">
                    Sikagig disediakan apa adanya. Kami berupaya menjaga layanan tetap berjalan baik dan aman,
                    tetapi kami tidak menjamin platform selalu bebas gangguan atau bahwa setiap pengguna akan
                    berperilaku sesuai harapan. Karena pekerjaan disepakati langsung antar pengguna, kami tidak
                    bertanggung jawab atas kerugian yang timbul dari perilaku, kelalaian, atau wanprestasi
                    Juragan maupun Jagoan, di luar peran kami menjalankan sistem escrow dan penyelesaian
                    sengketa.
                </p>
                <p className="mt-3 text-muted">
                    Sejauh diizinkan oleh hukum, tanggung jawab Sikagig terbatas pada hal yang berkaitan
                    langsung dengan dana yang sedang kami tahan dalam transaksi Anda. Ketentuan ini tidak
                    dimaksudkan untuk menghapus hak-hak Anda yang tidak dapat dikesampingkan menurut peraturan
                    perlindungan konsumen yang berlaku.
                </p>
            </section>

            {/* 11 */}
            <section className="mb-12">
                <h2 className="mb-5 text-xl font-semibold text-foreground">
                    11. Penangguhan dan Penghentian Akun
                </h2>
                <p className="text-muted">
                    Kami dapat menangguhkan atau menutup akun yang melanggar ketentuan ini atau merugikan
                    pengguna lain dan platform. Anda juga bebas berhenti memakai Sikagig dan menghapus akun
                    kapan saja. Jika masih ada transaksi berjalan atau dana di escrow saat akun ditutup, kami
                    akan menyelesaikannya terlebih dahulu sesuai ketentuan, termasuk menuntaskan sengketa yang
                    belum selesai, sebelum akun benar-benar dinonaktifkan.
                </p>
            </section>

            {/* 12 */}
            <section className="mb-12">
                <h2 className="mb-5 text-xl font-semibold text-foreground">
                    12. Perubahan Ketentuan
                </h2>
                <p className="text-muted">
                    Sikagig terus berkembang, jadi ketentuan ini bisa berubah seiring waktu. Kalau ada
                    perubahan penting, kami beri tahu lewat aplikasi atau email sebelum berlaku, dan tanggal
                    "Terakhir diperbarui" di atas kami sesuaikan. Dengan tetap memakai Sikagig setelah
                    perubahan berlaku, Anda dianggap menyetujui versi terbaru.
                </p>
            </section>

            {/* 13 */}
            <section className="mb-12">
                <h2 className="mb-5 text-xl font-semibold text-foreground">
                    13. Hukum yang Berlaku
                </h2>
                <p className="text-muted">
                    Ketentuan ini tunduk pada dan ditafsirkan menurut hukum Republik Indonesia. Kalau timbul
                    perselisihan antara Anda dan Sikagig, kami lebih dulu mengajak menyelesaikannya secara
                    musyawarah. Bila tidak tercapai, perselisihan diselesaikan melalui jalur hukum yang berlaku
                    di Indonesia.
                </p>
            </section>

            {/* 14 */}
            <section className="mb-6">
                <h2 className="mb-5 text-xl font-semibold text-foreground">
                    14. Hubungi Kami
                </h2>
                <p className="text-muted">
                    Ada pertanyaan soal Ketentuan Penggunaan ini? Silakan hubungi kami di:
                </p>
                <div className="mt-4 rounded-2xl border border-white/8 bg-white/5 p-6">
                    <p className="font-semibold text-foreground">
                        PT Sikagig Berkah Nusantara
                    </p>
                    <p className="mt-2 text-foreground">
                        <strong>Email:</strong>{" "}
                        <a
                            href="mailto:admin@sikagig.id"
                            className="text-[#7F55B1] underline underline-offset-4 hover:text-[#A685E2]"
                        >
                            -
                        </a>
                    </p>
                    <p className="mt-2 text-muted">
                        Kami akan berusaha merespons dalam waktu 3 hari kerja.
                    </p>
                </div>
            </section>
        </div>
    );
}
