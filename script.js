// const charDetail = document.querySelector(".charDetail");
// const characterChoose = document.querySelector(".character-choose");
const leftM = document.querySelector(".leftM");
const rightM = document.querySelector(".rightM");
const characterSelector = document.querySelector(".character-selector");
const dropdownContainer = document.querySelector(".dropdownContainer");
const stickerConatiner = document.querySelector(".stickerConatiner");
const closeSelector = document.querySelector(".closeSelector");
const chatMessage = document.querySelector(".chat-messages");
const sticker = document.querySelector(".sticker");
const stickerList = document.querySelector(".stickerList");
const dropdownSearch = document.querySelector("#dropdownSearch");
const rightMessageInput = document.querySelector("#rightMessageInput");
const chatName = document.querySelector("#chatName");
const chatNameEdit = document.querySelector("#chatNameEdit");
const messageForm = document.querySelector("#messageForm");
const customCharaForm = document.querySelector("#customCharaForm");
const customCharaInput = document.querySelector("#customCharaInput");
const customCharaFile = document.querySelector("#customCharaFile");
const customCharaNameForm = document.querySelector("#customCharaNameForm");
const customCharaNameInput = document.querySelector("#customCharaNameInput");
const customCharaNameSend = document.querySelector("#customCharaNameSend");
const post = document.querySelector("#posting");
const rightSelectedCharacter = document.querySelector(
  "#rightSelectedCharacter"
);
const rightSelectedCharacterName = document.querySelector(
  "#rightSelectedCharacterName"
);
const profilePics = [
  "Acheron.jpg",
  "Argenti.jpg",
  "Arlan.jpg",
  "Asta.jpg",
  "Aventurine.jpg",
  "Bailu.jpg",
  "Black _swan.jpg",
  "Blade.jpg",
  "Bronya.jpg",
  "Clara.jpg",
  "Dan _Heng.jpg",
  "Dr _Ratio.jpg",
  "Fu _Xuan.jpg",
  "Gallagher.jpg",
  "Gepard.jpg",
  "Guinaifen.jpg",
  "Hanya.jpg",
  "Herta.jpg",
  "Himeko.jpg",
  "Hook.jpg",
  "Huohuo.jpg",
  "Imbibitor _Lunae.jpg",
  "Jing _Yuan.jpg",
  "Jingliu.jpg",
  "Kafka.jpg",
  "Luka.jpg",
  "Luocha.jpg",
  "Lynx.jpg",
  "March _7th.jpg",
  "Misha.jpg",
  "Natasha.jpg",
  "Pela.jpg",
  "Qingque.jpg",
  "Ruan _Mei.jpg",
  "Sampo.jpg",
  "Seele.jpg",
  "Serval.jpg",
  "Silver _Wolf.jpg",
  "Sparkle.jpg",
  "Sushang.jpg",
  "Tingyun.jpg",
  "Topaz.jpg",
  "Welt.jpg",
  "Xueyi.jpg",
  "Yanqing.jpg",
  "Yukong.jpg",
];
let Messagesend = "";
let rightName = "Stelle";
let rightUrl = "profilePics/stelle.jpg";
let leftName = "March 7th";
let leftUrl = "profilePics/march _7th.jpg";
let GroupName = false;
let posting = "you are sending sticker as Stelle";
if (Messagesend == "right") {
  posting = `You are sending sticker as ${rightName}`;
}
if (Messagesend == "left") {
  posting = `You are sending sticker as ${leftName}`;
}
let stickerUrl = "";
chatNameEdit.value = chatName.textContent;
rightSelectedCharacter.src = rightUrl;
rightSelectedCharacterName.innerHTML = rightName;
console.log(chatName.textContent);
chatNameEdit.addEventListener("input", function () {
  chatName.innerHTML = chatNameEdit.value;
});

function isLink(input) {
  var urlPattern =
    /^(https?:\/\/)?([\w-]+\.)*[\w-]+(\.[a-z]{2,})?(:\d{1,5})?(\/\S*)?$/i;
  return urlPattern.test(input);
}

// MODAL

var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
  dropdownContainer.style.display = "none";
};
closeSelector.onclick = function () {
  dropdownContainer.style.display = "none";
  rightMessageInput.focus();
};

stickerConatiner.onclick = () => {
  stickerConatiner.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    dropdownContainer.style.display = "none";
  }
  if (event.target == dropdownContainer) {
    dropdownContainer.style.display = "none";
  }
};

// Add button click

const AddRightMessage = (mess) => {
  modal.style.display = "flex";
  rightSelectedCharacter.src = rightUrl;
  rightSelectedCharacterName.innerHTML = rightName;
  posting = `You are sending sticker as ${rightName}`;
  post.innerHTML = posting;
  rightMessageInput.focus();
  Messagesend = "right";
  console.log(Messagesend);
};
const AddLeftMessage = (mess) => {
  modal.style.display = "flex";
  rightSelectedCharacter.src = leftUrl;
  rightSelectedCharacterName.innerHTML = leftName;
  posting = `You are sending sticker as ${leftName}`;
  chatName.innerHTML = leftName;
  chatNameEdit.value = leftName;
  post.innerHTML = posting;
  rightMessageInput.focus();
  Messagesend = "left";
  console.log(Messagesend);
};
const charSelector = () => {
  //   dropdownContent.style.display = "flex";
  dropdownContainer.style.display = "flex";
  dropdownSearch.focus();
};

sticker.onclick = () => {
  stickerConatiner.style.display = "flex";
  let i = 0;
  while (i < 225) {
    stickerList.innerHTML += `
        <button><img src="stickers/sticker_${i}.png" alt="${i}" onclick="stickerSend(this.src)"/></button>
        `;
    i++;
  }
  post.innerHTML = posting;
};

const stickerSend = (e) => {
  console.log(e);
  stickerUrl = e;
  if (Messagesend == "right") {
    chatMessage.innerHTML += `
            <div class="SenderMessage">
                <div class="message-header">
                  <div class="message-content">
                    <span class="username">${rightName}</span>
                    <div class="message-box mes-box">
                    <img
                    src="${stickerUrl}"
                    alt="img"
                  />
                    </div>
                  </div>
                  <img src="${rightUrl}" alt="stelle" />
                </div>
              </div>
          `;
  } else {
    chatName.innerHTML = leftName;
    chatNameEdit.value = leftName;
    chatMessage.innerHTML += `
            <div class="ReceiverMessage">
            <div class="message-header receiverHeader">
            <img src="${leftUrl}" alt="stelle" />
              <div class="message-content receiverContent">
                <span class="username">${leftName}</span>
                <div class="message-box receiver mes-box">
                <img
                src="${stickerUrl}"
                alt="img"
              />
                </div>
              </div>
            </div>
          </div>
    
          `;
  }
  modal.style.display = "none";
};

const customCharaSendFunc = () => {
  const file = customCharaFile.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    console.log(url);
    rightSelectedCharacter.src = url;
    rightSelectedCharacterName.innerHTML = "Custom";
    customCharaForm.style.display = "none";
    customCharaNameForm.style.display = "flex";
    customCharaNameInput.focus();
    if (Messagesend == "right") {
      rightUrl = url;
    }
    if (Messagesend == "left") {
      leftUrl = url;
    }
  }
};

customCharaNameSend.onclick = (e) => {
  e.preventDefault();
  const nam = customCharaNameInput.value;
  console.log(nam);
  rightSelectedCharacterName.innerHTML = nam;
  post.innerHTML = `You are sending sticker as ${nam}`;
  posting = `You are sending sticker as ${nam}`;
  customCharaNameForm.style.display = "none";
  messageForm.style.display = "flex";
  rightMessageInput.focus();
  if (Messagesend == "right") {
    rightName = nam;
  } else {
    leftName = nam;
  }
};

//search
document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("dropdownSearch");
  var items = document.querySelectorAll(".dropdown-item");

  input.addEventListener("keyup", function () {
    var filter = input.value.toLowerCase();
    items.forEach(function (item) {
      if (item.textContent.toLowerCase().includes(filter)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
  items.forEach(function (item) {
    item.addEventListener("click", function () {
      console.log("You selected: " + item.textContent);
      dropdownContainer.style.display = "none";
      if (item.textContent == "Custom character") {
        console.log("custom chara");
        messageForm.style.display = "none";
        customCharaForm.style.display = "flex";
        customCharaInput.focus();
      } else if (item.textContent == "Group chat") {
        console.log("group chat");
      } else {
        url = "profilePics/" + item.textContent + ".jpg";
        url = url.replace(" ", " _");
        url = url.replace("-", "");
        if (Messagesend === "right") {
          rightName = item.textContent;
          rightUrl = url;
        } else {
          leftName = item.textContent;
          leftUrl = url;
        }
        rightSelectedCharacter.src = url;
        rightSelectedCharacterName.innerHTML = item.textContent;
        post.innerHTML = `You are sending sticker as ${item.textContent}`;
        posting = `You are sending sticker as ${item.textContent}`;
      }
    });
  });
});

const isLinkSure = (e) => {
  e.toLowerCase();
  if (e.startsWith("www.")) {
    return true;
  } else if (e.startsWith("http")) {
    return true;
  }
  return false;
};

//input message
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("messageForm");
  var input = document.getElementById("rightMessageInput");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    var message = rightMessageInput.value;
    if (message) {
      console.log(message, isLink(message), isLinkSure(message));
      modal.style.display = "none";
      if (Messagesend == "right") {
        post.innerHTML = `You are sending sticker as ${rightName}`;
        posting = `You are sending sticker as ${rightName}`;
        if (isLink(message) && isLinkSure(message)) {
          chatMessage.innerHTML += `
            <div class="SenderMessage">
                <div class="message-header">
                  <div class="message-content">
                    <span class="username">${rightName}</span>
                    <div class="message-box mes-box">
                    <img
                    src="${message}"
                    alt="img"
                  />
                    </div>
                  </div>
                  <img src="${rightUrl}" alt="stelle" />
                </div>
              </div>
          `;
        } else {
          chatMessage.innerHTML += `
            <div class="SenderMessage">
                <div class="message-header">
                  <div class="message-content">
                    <span class="username">${rightName}</span>
                    <div class="message-box">
                      <p>${message}</p>
                    </div>
                  </div>
                  <img src="${rightUrl}" alt="stelle" />
                </div>
              </div>
          `;
        }
      } else {
        post.innerHTML = `You are sending sticker as ${leftName}`;
        posting = `You are sending sticker as ${leftName}`;
        if (!GroupName) {
          chatName.innerHTML = leftName;
          chatNameEdit.value = leftName;
        }
        if (isLink(message) && isLinkSure(message)) {
          chatMessage.innerHTML += `
            <div class="ReceiverMessage">
            <div class="message-header receiverHeader">
            <img src="${leftUrl}" alt="stelle" />
              <div class="message-content receiverContent">
                <span class="username">${leftName}</span>
                <div class="message-box receiver mes-box">
                <img
                src="${message}"
                alt="img"
              />
                </div>
              </div>
            </div>
          </div>
    
          `;
        } else {
          chatMessage.innerHTML += `
            <div class="ReceiverMessage">
            <div class="message-header receiverHeader">
            <img src="${leftUrl}" alt="stelle" />
              <div class="message-content receiverContent">
                <span class="username">${leftName}</span>
                <div class="message-box receiver">
                  <p>${message}</p>
                </div>
              </div>
            </div>
          </div>
    
          `;
        }
      }
      input.value = "";
    }
  });
});

// save chat as image
document
  .getElementById("saveChatButton")
  .addEventListener("click", function () {
    const chatContainer = document.getElementById("chatMessages");
    const originalHeight = chatContainer.style.height;

    // Temporarily expand the chat container to show all messages
    chatContainer.style.height = "auto";

    // Use html2canvas to capture the full chat content
    html2canvas(chatContainer, { useCORS: true, logging: true })
      .then((canvas) => {
        // Restore the original height
        chatContainer.style.height = originalHeight;

        // Create a link to download the image
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "chat.png";
        link.click();
      })
      .catch((err) => {
        console.error("Error capturing chat content:", err);
      });
  });
