document.getElementById("jerusalem").addEventListener("click", jerusalem);
document.getElementById("jenin").addEventListener("click", jenin);
document.getElementById("gaza").addEventListener("click", gaza);
document.getElementById("nablus").addEventListener("click", nablus);
document.getElementById("haifa").addEventListener("click", haifa);
var info = document.getElementById("cities");

function jerusalem() {
  document.getElementById("title").innerHTML = "jerusalem";
  document.getElementById("describe").innerHTML =
    "It is the political and economic capital of Palestine. It is famous for a number of important religious monuments, whether in the Islamic or Christian religions. In Jerusalem, there is Al-Aqsa Mosque, the first of the two qiblahs, the Dome of the Rock, and the Church of the Holy Sepulcher.";
  document.getElementById("imagee").src = "/images/jerusalem3.jpeg";
  info.classList.remove("animate");
  info.offsetWidth;
  info.classList.add("animate");
}
function jenin() {
  info.classList.remove("animate");
  info.offsetWidth;
  info.classList.add("animate");
  document.getElementById("title").innerHTML = "jenin";
  document.getElementById("describe").innerHTML =
    " It is located in the northern West Bank of the Palestinian Authority and its center is Jenin. The governorate constitutes an economic weight much greater than its population size. It has a population of about 256,000. Its area is 583 km2 and constitutes 9.7% of the total area of the West Bank. It follows the city of Jenin.";
  document.getElementById("imagee").src = "/images/jenin.jpg";
}
function nablus() {
  info.classList.remove("animate");
  info.offsetWidth;
  info.classList.add("animate");
  document.getElementById("title").innerHTML = "nablus";
  document.getElementById("describe").innerHTML =
    " It is located north of Jerusalem, between the mountains of Ebal and Gerizim, and is famous for its soap and sweets industry. It is the administrative, cultural and economic center of the Nablus Mountains region; Which led to its prosperity and urban expansion in all directions, especially towards the east and west.";
  document.getElementById("imagee").src = "/images/nablus.jpg";
}
function gaza() {
  info.classList.remove("animate");
  info.offsetWidth;
  info.classList.add("animate");
  document.getElementById("title").innerHTML = "Gaza";
  document.getElementById("describe").innerHTML =
    " It has always been an important center on the transportation and trade routes between Palestine and Egypt, and between the Mediterranean, the Red Sea and the Arabian Peninsula. It is also the cultural and administrative center for the southern region of Palestine. Gaza is famous for its cultivation of vegetables, citrus fruits and flowers, and it is where Imam al-Shafi’i was born, and where the tomb of Hashem bin Abd Manaf is, and that is why it was called Gaza Hashem.";
  document.getElementById("imagee").src = "/images/Gaza.jpeg";
}
function haifa() {
  info.classList.remove("animate");
  info.offsetWidth;
  info.classList.add("animate");
  document.getElementById("title").innerHTML = "Haifa";
  document.getElementById("describe").innerHTML =
    " One of the famous Palestinian cities, which is known as the Bride of Carmel; Because of the presence of Mount Carmel on its land, which is considered one of the most famous Palestinian mountains.";
  document.getElementById("imagee").src = "/images/haifa1.jpeg";
}
