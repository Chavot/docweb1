
   
  const cviSidebar = [
    { text: "CVI", link: "/cvi/" },
    { text: "Brief", link: "/cvi/brief" },
    { text: "Moodboard", link: "/cvi/moodboard" },
    { text: "Drafts", link: "/cvi/drafts" },
    { text: "Early logos", link: "/cvi/logos" },
    { text: "Logo", link: "/cvi/logo1" },
    { text: "Colors", link: "/cvi/colors" },
    { text: "Fonts", link: "/cvi/fonts" },
    { text: "Logo safespace", link: "/cvi/safety" },
    { text: "Pattern", link: "/cvi/pattern" },
    { text: "Mockups", link: "/cvi/mockup" },



]
const logiSidebar = [
    { text: "Logi", link: "/logi/" },
    { text: "Fonditöötlus", link: "/logi/01_fontedit" },
    { text: "Ruudust tähed, nimest märk", link: "/logi/02_ruudud_mark" },
    { text: "Logo visandamine ", link: "/logi/03_apple_logo" },
    { text: "Kiisu referents 1", link: "/logi/04_refer1" },
    { text: "Kiisu referents 2", link: "/logi/05_refer2" },
    { text: "Vapp", link: "/logi/06_refer3" },
    { text: "Negatiivne ruum", link: "/logi/07_gestalt" },

]

module.exports = {
    title: "Blog_1",
    base:"/docweb1/",
    themeConfig: {
    
        nav: [

            { text: "Home", link: "/" },
            { text: "Contact", link: "/contact/" },
            { text: "Log", link: "/logi/" },
            { text: "CVI", link: "/cvi/" },
        ],
        sidebar:
        {



            
            "/cvi/": cviSidebar,
            "/cvi/brief": cviSidebar,
            "/cvi/drafts": cviSidebar,
            "/cvi/logos": cviSidebar,
            "/cvi/logo1": cviSidebar,
            "/cvi/colors": cviSidebar,
            "/cvi/fonts": cviSidebar,
            "/cvi/safety": cviSidebar,
            "/cvi/mockups": cviSidebar,




            "/logi/": logiSidebar,
            "/logi/01_fontedit": logiSidebar,
            "/logi/02_ruudud_mark": logiSidebar,
            "/logi/03_apple_logo": logiSidebar,
            "/logi/04_refer1": logiSidebar,
            "/logi/05_refer2": logiSidebar,
            "/logi/06_refer3": logiSidebar,
            "/logi/07_gestalt": logiSidebar,
        },
    }
};