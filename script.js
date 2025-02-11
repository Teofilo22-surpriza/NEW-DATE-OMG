function checkKeyword() {
    const keywordInput = document.getElementById("keywordInput").value.trim().toLowerCase();
    const result = document.getElementById("result");

    if (keywordInput === "lacullebedelor") {
        result.innerHTML = "Stimată domnișoară Alexia-Maria,<br><br>" +
                           "Îmi face o deosebită plăcere să vă invit la un spectacol de balet la Opera Națională din Iași, pentru a viziona „Lacul lebedelor”, astăzi, la ora 18:30. Vă propun să ne întâlnim la ora 18:00, pentru a călători împreună cu Boltul, și, bineînțeles, mă voi asigura că ajungeți în siguranță acasă după spectacol.<br><br>" +
                           "Îmi doresc să vă ofer o seară plăcută și memorabilă, dar înțeleg dacă aveți alte planuri sau nu sunteți disponibilă. În cazul în care doriți să acceptați invitația, vă rog să-mi confirmați.";
    } else {
        result.textContent = "Cuvânt cheie nu este bun.";
    }
}
