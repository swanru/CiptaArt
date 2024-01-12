document.getElementById("whatsappForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var name		= document.getElementById("name").value;
    var email 		= document.getElementById("email").value;
    var message 	= document.getElementById("message").value;
    var type        = document.getElementById("type").value;
    let contact 	= '+62895333951986'; // isi dengan nomor WA (+6283811223344)

    var encodedMessage = encodeURIComponent(
        "Nama	: " + name + "\n" +
        "Email		: " + email + "\n" +
        "Jenis Pertanyaan : " + type + "\n" +
        "Pesan		: " + message
    );

    var link;

    // Check if user is on a mobile device
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        link = `whatsapp://send?phone=${contact}&text=${encodedMessage}`;
    } else { // Desktop device
        link = `https://api.whatsapp.com/send?phone=${contact}&text=${encodedMessage}`;
    }

    window.open(link, '_blank');
});