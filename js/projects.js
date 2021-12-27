let projectBtns = document.getElementsByClassName("button--proyect");

// modal elements
let modal = document.getElementById("modal"),
    modalClose = document.getElementById("modal_close"),
    modalContent = document.getElementById("modal_content"),
    modalImage = document.getElementById("modal_img"),
    modalTitle = document.getElementById("modal_title"),
    modalText = document.getElementById("modal_text"),
    modalDate = document.getElementById("modal_date");


const projects = [
    {
        id: 1,
        title: "Nunc ac dictum",
        image: "3.jpg",
        date: "15 de Marzo, 2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac dictum nibh. Aenean ultrices finibus bibendum. Pellentesque tincidunt urna sagittis viverra efficitur. Nullam quis consequat nibh. Maecenas vestibulum tortor mi, quis dignissim neque scelerisque quis. Suspendisse vitae metus mollis, condimentum leo vel, mattis magna. Praesent condimentum elementum nisi, a efficitur quam tristique in. Nulla ut massa ante. Donec quis varius diam. Donec euismod rutrum quam id vulputate.",
    },
    {
        id: 2,
        title: "Gravida lectus",
        image: "9.jpg",
        date: "12 de Marzo, 2021",
        content: "Cras gravida lectus tellus, a egestas magna condimentum eget. Vestibulum vel elit nec ex fermentum interdum. Pellentesque laoreet mauris eu mauris malesuada lobortis. Aenean placerat varius quam a aliquam. Aliquam leo tellus, rutrum a sapien at, sodales tincidunt enim. Donec eget cursus dolor, vitae gravida urna. Nulla laoreet augue eu sem faucibus finibus. Vivamus luctus, est porta ullamcorper egestas, diam magna sollicitudin lorem, et scelerisque ante magna sit amet ipsum. Curabitur interdum interdum ipsum, a porta turpis porta quis. Cras elementum ante vitae sem tristique, id bibendum sem luctus. Curabitur vitae finibus elit. Phasellus eu enim quam. Cras eu tempus metus, ac malesuada erat. Vestibulum vitae nulla vel sapien pulvinar sagittis ac id sem.",
    },
    {
        id: 3,
        title: "Vestibulum tempor",
        image: "5.jpg",
        date: "08 de Febrero, 2021",
        content: "Vestibulum tempor ipsum ac sollicitudin aliquam. Vivamus in eros libero. Etiam ornare diam ut mollis placerat. Ut eu ligula justo. Morbi id consequat velit, quis eleifend nisi. Donec quis mauris lacus. Praesent sed tincidunt ante. Donec magna quam, accumsan at sapien eget, aliquet rutrum nisi. Phasellus vel elit in justo aliquam tristique. Aliquam ac arcu sem. Suspendisse sed mauris imperdiet, tempus urna at, iaculis diam.",
    },
    {
        id: 4,
        title: "Iaculis libero",
        image: "4.jpg",
        date: "17 de Enero, 2021",
        content: "Praesent non iaculis libero. Phasellus finibus felis ligula, in ultricies sapien auctor vel. Duis ac turpis quis enim consequat venenatis ut vitae ex. Quisque ut rutrum libero. Suspendisse mollis venenatis neque. Curabitur suscipit magna at eros blandit ullamcorper. Aenean sagittis vestibulum sem scelerisque laoreet.",
    },
    {
        id: 5,
        title: "Sagittis magna",
        image: "14.jpg",
        date: "22 de Diciembre, 2020",
        content: "Ut sagittis magna sit amet mauris vestibulum gravida. Vestibulum vestibulum mi at ultricies tincidunt. Donec fermentum, urna varius interdum varius, enim odio luctus nulla, sit amet ultrices urna ipsum nec odio. Aliquam erat volutpat. Pellentesque ligula justo, fringilla sed ligula sed, tempus dignissim nunc. Nam vitae sagittis mauris. Pellentesque vel malesuada nulla. Nunc hendrerit commodo nisi. Aenean pellentesque commodo sapien, eget convallis odio consectetur at.",
    },
    {
        id: 6,
        title: "Suspendisse potenti",
        image: "16.jpg",
        date: "21 de Octubre, 2020",
        content: "Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sit amet lorem magna. Sed venenatis orci eget leo varius accumsan. Cras ultrices, ipsum et aliquet sagittis, velit nibh tempor risus, finibus faucibus lacus orci ac nulla. Integer finibus magna justo, vel aliquam nulla ultricies non.",
    },
    {
        id: 7,
        title: "Viverra",
        image: "7.jpg",
        date: "08 de Agosto, 2020",
        content: "Donec non erat eu turpis faucibus semper. Sed iaculis, metus id ultrices vestibulum, mi metus volutpat elit, a accumsan nisi sem nec odio. Mauris at viverra nisi. Praesent ullamcorper orci urna, vitae hendrerit orci volutpat nec. Integer vel risus sed massa viverra tempor vestibulum at massa. Maecenas blandit, sapien ac tempus pharetra, mi lacus congue ex, nec tristique purus dui sed eros. Nulla fermentum leo vitae ante scelerisque egestas. Aenean porta mauris ligula, a efficitur metus laoreet in. Donec dapibus hendrerit tortor eu tincidunt. Quisque tortor neque, consectetur id pretium consectetur, dapibus nec purus.",
    },
];

for (let i = 0; i < projectBtns.length; i++) {
    projectBtns[i].addEventListener("click", (e) => {
        let projectId = e.target.dataset.id;
        if (projectId) {
            let [projectData] = projects.filter(project => {
                return project.id == projectId;
            })
            if (projectData) {
                modalImage.src = `../images/gallery/${projectData.image}`;
                modalImage.alt = projectData.image;
                modalTitle.textContent = projectData.title;
                modalText.textContent = projectData.content;
                modalDate.textContent = projectData.date;
                modal.classList.add("modal--open");
            }
        }
    })
}


// modal close handler
modalContent.addEventListener("click", (e) => {
    e.stopPropagation();
})

modal.addEventListener("click", (e) => {
    modal.classList.remove("modal--open");
})

modalClose.addEventListener("click", (e) => {
    modal.classList.remove("modal--open");
})