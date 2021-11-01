let officeSelect = document.getElementById("offices_id");
let mapIframe = document.getElementById("map_iframe");
let officeCtn = document.getElementById("office_ctn");
let officeTitle = document.getElementById("office_title"),
    officeAddress = document.getElementById("office_address"),
    officeTime = document.getElementById("office_time"),
    officePhone = document.getElementById("office_phone"),
    officeList = document.getElementById("office_list");

const officesData = [
    {
        id: 1,
        src: "!1m18!1m12!1m3!1d3283.9384383069223!2d-58.42155608477018!3d-34.60571818045901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4f1f97ff89e90592!2sPlaza%20Almagro!5e0!3m2!1ses!2sar!4v1635614440062!5m2!1ses!2sar",
        name: "Oficina Almagro",
        address: "Sarmiento 3840",
        hours: "09:00hs a 20:00hs",
        phone: "1234-1234",
        services: `
            <li>Lorem ipsum</li>
            <li>Lorem dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem amet</li>
        `,
    },
    {
        id: 2,
        src: "!1m18!1m12!1m3!1d3283.9075353628896!2d-58.43782248477022!3d-34.60649958045876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd055df0a7dafa86e!2sParque%20Centenario!5e0!3m2!1ses!2sar!4v1635614388340!5m2!1ses!2sar",
        name: "Oficina Centenario",
        address: "Angel Gallardo 300",
        hours: "08:00hs a 20:00hs",
        phone: "1234-1235",
        services: `
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem sit amet</li>
            <li>Lorem ipsum dolor ipsum dolor sit amet</li>
            <li>Lorem amet</li>
        `,
    },
    {
        id: 3,
        src: "!1m18!1m12!1m3!1d3284.912343016331!2d-58.423247084771035!3d-34.58108448046552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6c1301b2924b8a91!2sPlaza%20Italia!5e0!3m2!1ses!2sar!4v1635614309060!5m2!1ses!2sar",
        name: "Oficina Italia",
        address: "Av. Santa Fe 1420",
        hours: "09:00hs a 19:00hs",
        phone: "1236-1236",
        services: `
            <li>Ipsum ipsum dolor sit amet</li>
            <li>Lorem sit amet sit amet</li>
            <li>Ipsum dolor ipsum dolor sit amet</li>
            <li>Lorem sit amet</li>
        `,
    },
    {
        id: 4,
        src: "!1m18!1m12!1m3!1d3285.6615139503815!2d-58.46089068477136!3d-34.56212468047033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a0919ebcce30899!2sPlaza%20Noruega!5e0!3m2!1ses!2sar!4v1635614148608!5m2!1ses!2sar",
        name: "Oficina Noruega",
        address: "Ciudad de La Paz 2175",
        hours: "09:00hs a 20:00hs",
        phone: "1237-1237",
        services: `
            <li>Lorem dolor sit amet</li>
            <li>Lorem doloer sit amet dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem amet dolor sit amet</li>
        `,
    },
    {
        id: 5,
        src: "!1m18!1m12!1m3!1d3283.457981530614!2d-58.435389784769896!3d-34.61786508045572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x30b34282ae8fae18!2sParque%20Rivadavia!5e0!3m2!1ses!2sar!4v1635614410651!5m2!1ses!2sar",
        name: "Oficina Rivadavia",
        address: "Av. Rivadavia 4950",
        hours: "08:00hs a 17:00hs",
        phone: "1238-1238",
        services: `
            <li>Lorem dolor sit amet</li>
            <li>Lorem sit, amet dolor ipsum</li>
            <li>Lorem ipsum dolor, sit ipsum dolor sit amet</li>
            <li>Lorem amet dolor</li>
        `,
    },
    {
        id: 6,
        src: "!1m18!1m12!1m3!1d3284.248003527934!2d-58.394416384770544!3d-34.59788978046104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfc4b597cc0694e09!2sPlaza%20Rodr%C3%ADguez%20Pe%C3%B1a!5e0!3m2!1ses!2sar!4v1635614509427!5m2!1ses!2sar",
        name: "Oficina Rodríguez Peña",
        address: "Rodríguez Pena 920",
        hours: "10:00hs a 19:00hs",
        phone: "1239-1239",
        services: `
            <li>Lorem ipsum dolor, sit amet</li>
            <li>Lorem sit amet</li>
            <li>Lorem amet</li>
            <li>Lorem ipsum sit amet</li>
        `,
    },
    {
        id: 7,
        src: "!1m18!1m12!1m3!1d3284.6083053871102!2d-58.43239758477082!3d-34.58877638046331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x560fe6ff3f099abf!2sPlaza%20Serrano!5e0!3m2!1ses!2sar!4v1635614492529!5m2!1ses!2sar",
        name: "Oficina Serrano",
        address: "Serrano 1550",
        hours: "10:00hs a 20:00hs",
        phone: "1230-1230",
        services: `
            <li>Lorem ipsum dolor, sit amet</li>
            <li>Lorem sit amet sit amet</li>
            <li>Lorem amet</li>
            <li>Lorem ipsum dolor ipsum dolor sit amet</li>
        `,
    },
    {
        id: 8,
        src: "!1m18!1m12!1m3!1d3284.7656973810217!2d-58.389310884770815!3d-34.58479468046444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf92167db2b401378!2sParque%20Thays!5e0!3m2!1ses!2sar!4v1635614339503!5m2!1ses!2sar",
        name: "Oficina Thays",
        address: "Av. del Libertador 2013",
        hours: "09:00hs a 20:00hs",
        phone: "1231-1232",
        services: `
            <li>Lorem ipsum dolor, sit amet</li>
            <li>Lorem sit amet</li>
            <li>Lorem ipsum dolor ipsum dolor sit amet</li>
            <li>Lorem amet</li>
        `,
    }
]


officeSelect.addEventListener("change", (e) => {
    let mapData = e.target.value;
    if (mapData) {
        let [officeData] = officesData.filter(office => {
            return office.id == mapData;
        })
        // update data
        mapIframe.src = `https://www.google.com/maps/embed?pb=${officeData.src}`;
        officeTitle.textContent = officeData.name;
        officeAddress.textContent = officeData.address;
        officeTime.textContent = officeData.hours;
        officePhone.textContent = officeData.phone;
        officeList.innerHTML = officeData.services;
        officeCtn.classList.add("office__open");
    } else {
        mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1x3Op6mEmRBbmLAZhuFsbJQg7P0amLz6G";
        officeCtn.classList.remove("office__open");
    }
})