export default function PrivacyText(){
    return(
        <div className="px-6 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl text-lg">   
            <div className="mb-14 mt-10">
                        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#7F55B1]">
                            Legal
                        </p>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                            Kebijakan Privasi
                        </h1>
                    </div>

                    {/* intro */}
                    <section className="mb-12">
                        <p className="leading-relaxed text-foreground/90">
                            Sikagig mempertemukan Sika yang butuh bantuan dengan Jagoan yang mengerjakannya.
                            Untuk menjalankan layanan ini, kami mengumpulkan dan memproses beberapa data Anda,
                            seperti data akun, transaksi dompet, dan file yang Anda unggah saat mengerjakan tugas.
                            Halaman ini menjelaskan apa saja datanya dan untuk apa kami memakainya.
                        </p>
                        <p className="mt-4 leading-relaxed text-muted">
                            Kebijakan ini mengacu pada Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data
                            Pribadi (UU PDP). Dalam pemrosesan ini Sikagig, layanan yang dioperasikan oleh
                            PT Sikagig Berkah Nusantara, bertindak sebagai Pengendali Data Pribadi dan Anda
                            adalah Subjek Data Pribadi. Kami memproses data Anda atas dasar yang sah menurut
                            UU PDP, yaitu persetujuan Anda, pelaksanaan perjanjian layanan, pemenuhan kewajiban
                            hukum kami, dan kepentingan sah untuk menjaga keamanan platform.
                        </p>
                        <p className="mt-4 leading-relaxed text-muted">
                            Persetujuan tersebut Anda berikan saat mendaftar dan menggunakan Sikagig, dan dapat
                            Anda tarik kapan saja. Untuk verifikasi identitas (KYC) yang sifatnya opsional, kami
                            meminta persetujuan terpisah sebelum memproses foto KTP atau selfie Anda.
                        </p>
                    </section>

                    {/* 1 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-xl font-semibold text-foreground">
                            1. Informasi yang Kami Kumpulkan
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="mb-2 font-medium text-foreground">
                                    1.1 Informasi Akun
                                </h3>
                                <p className="text-muted">
                                    Saat mendaftar, kami mengumpulkan nama lengkap, alamat email, nomor telepon,
                                    dan kata sandi. Kata sandi diamankan dengan hashing dan tidak dapat dibaca
                                    oleh siapa pun, termasuk kami.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 font-medium text-foreground">
                                    1.2 Informasi Profil
                                </h3>
                                <p className="text-muted">
                                    Anda dapat menambahkan foto profil, bio, serta foto tambahan lainnya.
                                    Informasi ini membantu membangun kepercayaan di antara pengguna platform.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 font-medium text-foreground">
                                    1.3 Informasi Verifikasi Identitas
                                </h3>
                                <p className="text-muted">
                                    KYC bersifat opsional. Pengguna yang menyelesaikan KYC akan mendapatkan badge
                                    verifikasi yang berbeda di platform, sehingga pengguna lain dapat melihat
                                    bahwa akun tersebut sudah diverifikasi. Proses KYC dapat melibatkan foto KTP,
                                    selfie memegang KTP, dan dokumen pendukung lain seperti SKCK (opsional).
                                </p>
                                <p className="mt-3 text-muted">
                                    Foto KTP dan selfie KTP digunakan untuk proses verifikasi identitas. Setelah
                                    proses verifikasi selesai, foto KTP dan selfie KTP akan dihapus dari
                                    penyimpanan aktif kami dan tidak disimpan sebagai arsip permanen. Kami hanya
                                    menyimpan status verifikasi, metadata yang diperlukan, dan catatan audit yang
                                    relevan untuk keamanan platform.
                                </p>
                                <p className="mt-3 text-muted">
                                    SKCK, jika Anda memilih untuk mengunggahnya, bersifat opsional dan digunakan
                                    untuk menambah kepercayaan di profil. Sikagig tidak menampilkan foto KTP,
                                    selfie KTP, atau dokumen SKCK ke pengguna lain.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 font-medium text-foreground">
                                    1.4 Informasi Finansial
                                </h3>
                                <p className="text-muted">
                                    Kami menyimpan saldo dompet digital Anda, riwayat transaksi (top-up,
                                    penarikan, escrow), serta data rekening bank yang Anda gunakan untuk penarikan
                                    dana. Data rekening bank hanya dikumpulkan saat Anda mengajukan penarikan.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 font-medium text-foreground">
                                    1.5 Konten yang Anda Buat
                                </h3>
                                <p className="text-muted">
                                    Ini mencakup gig yang Anda posting, penawaran yang Anda ajukan, pesan chat,
                                    ulasan, laporan sengketa, serta file dan foto yang Anda unggah sebagai
                                    lampiran (misalnya bukti penyelesaian tugas).
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 font-medium text-foreground">
                                    1.6 Informasi Perangkat &amp; Log
                                </h3>
                                <p className="text-muted">
                                    Kami menerima informasi teknis seperti jenis perangkat, sistem operasi, serta
                                    data yang diperlukan untuk mengirimkan notifikasi push. Kami tidak
                                    mengumpulkan data lokasi GPS perangkat Anda.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 2 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-xl font-semibold text-foreground">
                            2. Bagaimana Kami Menggunakan Informasi Anda
                        </h2>
                        <ul className="list-disc space-y-2 pl-5 text-muted">
                            <li>Menyediakan, mengoperasikan, dan memelihara layanan Sikagig.</li>
                            <li>Mengautentikasi akun dan menjaga keamanan platform.</li>
                            <li>
                                Memfasilitasi interaksi antara pihak yang membutuhkan jasa (Sika) dan
                                pihak yang mengerjakannya (Jagoan).
                            </li>
                            <li>Memproses pembayaran, escrow, dan penarikan dana.</li>
                            <li>
                                Mengirimkan notifikasi transaksional terkait status gig, bid, pembayaran,
                                atau sengketa.
                            </li>
                            <li>
                                Memverifikasi identitas pengguna secara opsional untuk membantu membangun
                                kepercayaan dan mencegah penyalahgunaan.
                            </li>
                            <li>Menangani sengketa dan memberikan dukungan pelanggan.</li>
                            <li>Mematuhi kewajiban hukum dan peraturan yang berlaku.</li>
                        </ul>
                    </section>

                    {/* 3 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-xl font-semibold text-foreground">
                            3. Berbagi Informasi Anda
                        </h2>
                        <p className="mb-4 text-muted">
                            Kami <strong>tidak menjual</strong> data pribadi Anda. Kami hanya membagikan data
                            dalam situasi berikut:
                        </p>
                        <ul className="list-disc space-y-2 pl-5 text-muted">
                            <li>
                                <strong>Dengan pengguna lain:</strong> Nama dan foto profil Anda dapat dilihat
                                oleh pengguna lain saat berinteraksi di platform (misalnya saat memposting gig,
                                mengajukan bid, atau chat).
                            </li>
                            <li>
                                <strong>Penyedia layanan pihak ketiga:</strong> Kami bekerja sama dengan penyedia
                                layanan terpercaya untuk keperluan pembayaran, verifikasi identitas, pengiriman
                                notifikasi, dan penyimpanan data. Mereka hanya diizinkan mengakses data
                                seperlunya untuk melaksanakan tugas tersebut. Untuk KYC, data identitas diproses
                                hanya untuk kebutuhan verifikasi dan tidak digunakan untuk pemasaran.
                            </li>
                            <li>
                                <strong>Kepatuhan hukum:</strong> Kami dapat mengungkapkan data jika diwajibkan
                                oleh hukum, perintah pengadilan, atau untuk melindungi hak, properti, atau
                                keselamatan kami dan pengguna lain.
                            </li>
                        </ul>
                    </section>

                    {/* 4 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-xl font-semibold text-foreground">
                            4. Keamanan Informasi Anda
                        </h2>
                        <p className="text-muted">
                            Kami menyimpan data Anda di infrastruktur yang dilindungi enkripsi dan kontrol
                            akses. Kata sandi diamankan dengan hashing sehingga tidak bisa dibaca siapa pun,
                            termasuk kami, dan foto KYC dihapus dari penyimpanan aktif setelah verifikasi
                            selesai. Akses internal ke data sensitif kami batasi hanya untuk keperluan yang
                            benar-benar diperlukan.
                        </p>
                        <p className="mt-3 text-muted">
                            Tidak ada sistem yang sepenuhnya kebal, jadi kami juga mengandalkan kewaspadaan
                            Anda: jaga kerahasiaan kata sandi, dan jangan pernah membagikan kode OTP ke siapa
                            pun, bahkan ke orang yang mengaku dari pihak Sikagig. Kami tidak akan pernah
                            meminta OTP atau kata sandi Anda.
                        </p>
                    </section>

                    {/* 5 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-xl font-semibold text-foreground">
                            5. Cookie dan Teknologi Serupa
                        </h2>
                        <p className="text-muted">
                            Pada situs web dan halaman pemasaran Sikagig, kami menggunakan layanan analitik
                            dan pengukuran kampanye pihak ketiga, yaitu Google Analytics untuk memahami lalu
                            lintas pengunjung dan X (Twitter) Pixel untuk mengukur efektivitas iklan. Layanan
                            ini dapat menggunakan cookie atau teknologi serupa untuk mengumpulkan data
                            penggunaan secara agregat.
                        </p>
                        <p className="mt-3 text-muted">
                            Di dalam aplikasi Sikagig, kami menggunakan analitik internal (first-party) untuk
                            meningkatkan layanan dan tidak membagikan data tersebut ke jaringan iklan pihak
                            ketiga. Anda dapat mengelola atau menonaktifkan cookie melalui pengaturan browser
                            Anda.
                        </p>
                    </section>

                    {/* 6 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-xl font-semibold text-foreground">
                            6. Penyimpanan dan Retensi Data
                        </h2>
                        <p className="text-muted">
                            Data pribadi Anda disimpan di server yang dilindungi dengan standar keamanan
                            industri. Kami menyimpan data selama akun Anda aktif dan dalam jangka waktu yang
                            diperlukan untuk memenuhi tujuan bisnis serta kewajiban hukum. Jika Anda menghapus
                            akun, kami akan menghapus atau menganonimkan data pribadi Anda, kecuali untuk data
                            tertentu yang wajib disimpan berdasarkan peraturan perundang-undangan (misalnya data
                            transaksi untuk keperluan perpajakan).
                        </p>
                        <p className="mt-4 text-muted">
                            Khusus KYC, foto KTP dan selfie KTP tidak disimpan permanen. Setelah verifikasi
                            selesai, file foto tersebut akan dihapus dari penyimpanan aktif kami. Status KYC,
                            waktu verifikasi, dan informasi minimum yang diperlukan untuk audit keamanan dapat
                            tetap disimpan selama akun aktif atau selama diwajibkan oleh hukum.
                        </p>
                    </section>

                    {/* 7 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-xl font-semibold text-foreground">
                            7. Hak Anda sebagai Pengguna
                        </h2>
                        <p className="mb-4 text-muted">
                            Sebagai Subjek Data Pribadi, UU PDP memberi Anda sejumlah hak atas data pribadi
                            Anda, antara lain:
                        </p>
                        <ul className="list-disc space-y-2 pl-5 text-muted">
                            <li>
                                <strong>Hak akses:</strong> Meminta salinan data pribadi yang kami miliki
                                tentang Anda.
                            </li>
                            <li>
                                <strong>Hak koreksi:</strong> Memperbarui atau memperbaiki data yang tidak
                                akurat.
                            </li>
                            <li>
                                <strong>Hak penghapusan:</strong> Meminta penghapusan data pribadi Anda, dengan
                                memperhatikan kewajiban retensi hukum.
                            </li>
                            <li>
                                <strong>Hak menarik persetujuan:</strong> Menarik persetujuan yang sebelumnya
                                Anda berikan atas pemrosesan data tertentu, tanpa memengaruhi keabsahan
                                pemrosesan sebelum penarikan.
                            </li>
                            <li>
                                <strong>Hak pembatasan:</strong> Meminta kami membatasi pengolahan data tertentu.
                            </li>
                            <li>
                                <strong>Hak portabilitas:</strong> Meminta data Anda dalam format yang dapat
                                dibaca atau ditransfer ke pihak lain.
                            </li>
                            <li>
                                <strong>Hak menolak:</strong> Menolak penggunaan data untuk tertentu, termasuk
                                notifikasi non-esensial.
                            </li>
                        </ul>
                        <p className="mt-4 text-muted">
                            Untuk menggunakan hak-hak di atas, silakan hubungi kami melalui informasi kontak
                            di bagian akhir dokumen ini.
                        </p>
                    </section>

                    {/* 8 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-xl font-semibold text-foreground">
                            8. Anak di Bawah Umur
                        </h2>
                        <p className="text-muted">
                            Layanan Sikagig tidak ditujukan untuk individu di bawah usia 17 tahun. Kami tidak
                            dengan sengaja mengumpulkan data dari anak-anak. Jika Anda mengetahui bahwa anak di
                            bawah umur telah memberikan data pribadi kepada kami, segera hubungi kami agar kami
                            dapat menghapus data tersebut.
                        </p>
                    </section>

                    {/* 9 */}
                    <section className="mb-12">
                        <h2 className="mb-5 text-xl font-semibold text-foreground">
                            9. Perubahan Kebijakan Privasi
                        </h2>
                        <p className="text-muted">
                            Kebijakan ini bisa berubah seiring berkembangnya fitur Sikagig. Kalau ada
                            perubahan penting, kami beri tahu lewat aplikasi atau email sebelum berlaku, dan
                            tanggal "Terakhir diperbarui" di atas kami sesuaikan. Dengan tetap menggunakan
                            Sikagig setelah perubahan berlaku, Anda dianggap menyetujui versi terbaru.
                        </p>
                    </section>

                    {/* 10 */}
                    <section className="mb-6">
                        <h2 className="mb-5 text-xl font-semibold text-foreground">
                            10. Hubungi Kami
                        </h2>
                        <p className="text-muted">
                            Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait Kebijakan
                            Privasi ini, silakan hubungi kami di:
                        </p>
                        <div className="mt-4 rounded-2xl border border-white/8 bg-white/5 p-6">
                            <p className="font-semibold text-foreground">
                                PT Sikagig Berkah Nusantara
                            </p>
                            <p className="mt-2 text-foreground">
                                <strong>Email:</strong>{" "}
                                <a
                                    href="mailto:admin@Sikagig.id"
                                    className="text-[#7F55B1] underline underline-offset-4 hover:text-[#7F55B1]-dim"
                                >
                                    -
                                </a>
                            </p>
                            <p className="mt-2 text-muted">
                                Kami akan berusaha merespons permintaan Anda dalam waktu 3 hari kerja.
                            </p>
                        </div>
                    </section>
    </div>
    )
}