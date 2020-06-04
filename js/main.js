// VARIABLES
var botonAll = document.getElementById('botonAll')
var botonBranding = document.getElementById('botonBranding')
var BotonWeb = document.getElementById('BotonWeb')
var BotonPhoto = document.getElementById('BotonPhoto')
var BotonApp = document.getElementById('BotonApp')
var BotonBuscar = document.getElementById('BotonBuscar')
var barraBuscar = document.getElementById('barraBuscar')
var botonAll_2 = document.getElementById('botonAll_2')
var botonBranding_2 = document.getElementById('botonBranding_2')
var BotonWeb_2 = document.getElementById('BotonWeb_2')
var BotonPhoto_2 = document.getElementById('BotonPhoto_2')
var BotonApp_2 = document.getElementById('BotonApp_2')
var menuMobile = document.getElementById('menuMobile')
var navMobileOculto = document.getElementById('navMobileOculto')
var cuerpo = document.querySelector('body')
var capaOscura = document.getElementById('capaOscura')
var Branding = document.getElementById('Branding')
var web = document.getElementById('web')
var photo = document.getElementById('photo')
var app = document.getElementById('app')
var main = document.getElementById('contenedorGeneralImg')
var botonVerMas = document.getElementById('botonVerMas')

// FUNCION BOTON VER MAS
botonVerMas.addEventListener('click', function () {
    if (Branding.style.position === 'relative') {
        main.style.height='auto'
        app.style.marginBottom='4em'
    }
})
// FUNCIONES BOTONES PORTAFOLIO
botonAll.addEventListener('click', function () {
    Branding.style.display=null
    web.style.display=null
    photo.style.display=null
    app.style.display=null
    Branding.style.position='relative'
    web.style.position='relative'
    photo.style.position='relative'
    app.style.position='relative'
    Branding.style.top='2em'
    web.style.top='2em'
    photo.style.top='2em'
    app.style.top='2em'
    Branding.style.marginBottom='1em'
    web.style.marginBottom='1em'
    photo.style.marginBottom='1em'
    app.style.marginBottom='1em'
})
botonAll_2.addEventListener('click', function () {
    //main.style.height='255em'
    Branding.style.display=null
    web.style.display=null
    photo.style.display=null
    app.style.display=null
    Branding.style.position='relative'
    web.style.position='relative'
    photo.style.position='relative'
    app.style.position='relative'
    Branding.style.top='2em'
    web.style.top='2em'
    photo.style.top='2em'
    app.style.top='2em'
    Branding.style.marginBottom='1em'
    web.style.marginBottom='1em'
    photo.style.marginBottom='1em'
    app.style.marginBottom='1em'
})
botonBranding.addEventListener('click', function () {
    main.style.height=null
    Branding.style.display=null
    web.style.display='none'
    photo.style.display='none'
    app.style.display='none'
    Branding.style.position=null
    web.style.position=null
    photo.style.position=null
    app.style.position=null
    Branding.style.top=null
    web.style.top=null
    photo.style.top=null
    app.style.top=null
    Branding.style.marginBottom=null
    web.style.marginBottom=null
    photo.style.marginBottom=null
    app.style.marginBottom=null
})
botonBranding_2.addEventListener('click', function () {
    main.style.height=null
    Branding.style.display=null
    web.style.display='none'
    photo.style.display='none'
    app.style.display='none'
    Branding.style.position=null
    web.style.position=null
    photo.style.position=null
    app.style.position=null
    Branding.style.top=null
    web.style.top=null
    photo.style.top=null
    app.style.top=null
    Branding.style.marginBottom=null
    web.style.marginBottom=null
    photo.style.marginBottom=null
    app.style.marginBottom=null
})
BotonWeb.addEventListener('click', function () {
    main.style.height=null
    Branding.style.display='none'
    web.style.display=null
    photo.style.display='none'
    app.style.display='none'
    Branding.style.position=null
    web.style.position=null
    photo.style.position=null
    app.style.position=null
    Branding.style.top=null
    web.style.top=null
    photo.style.top=null
    app.style.top=null
    Branding.style.marginBottom=null
    web.style.marginBottom=null
    photo.style.marginBottom=null
    app.style.marginBottom=null
})
BotonWeb_2.addEventListener('click', function () {
    main.style.height=null
    Branding.style.display='none'
    web.style.display=null
    photo.style.display='none'
    app.style.display='none'
    Branding.style.position=null
    web.style.position=null
    photo.style.position=null
    app.style.position=null
    Branding.style.top=null
    web.style.top=null
    photo.style.top=null
    app.style.top=null
    Branding.style.marginBottom=null
    web.style.marginBottom=null
    photo.style.marginBottom=null
    app.style.marginBottom=null
})
BotonPhoto.addEventListener('click', function () {
    main.style.height=null
    Branding.style.display='none'
    web.style.display='none'
    photo.style.display=null
    app.style.display='none'
    Branding.style.position=null
    web.style.position=null
    photo.style.position=null
    app.style.position=null
    Branding.style.top=null
    web.style.top=null
    photo.style.top=null
    app.style.top=null
    Branding.style.marginBottom=null
    web.style.marginBottom=null
    photo.style.marginBottom=null
    app.style.marginBottom=null
})
BotonPhoto_2.addEventListener('click', function () {
    main.style.height=null
    Branding.style.display='none'
    web.style.display='none'
    photo.style.display=null
    app.style.display='none'
    Branding.style.position=null
    web.style.position=null
    photo.style.position=null
    app.style.position=null
    Branding.style.top=null
    web.style.top=null
    photo.style.top=null
    app.style.top=null
    Branding.style.marginBottom=null
    web.style.marginBottom=null
    photo.style.marginBottom=null
    app.style.marginBottom=null
})
BotonApp.addEventListener('click', function () {
    main.style.height=null
    Branding.style.display='none'
    web.style.display='none'
    photo.style.display='none'
    app.style.display=null
    Branding.style.position=null
    web.style.position=null
    photo.style.position=null
    app.style.position=null
    Branding.style.top=null
    web.style.top=null
    photo.style.top=null
    app.style.top=null
    Branding.style.marginBottom=null
    web.style.marginBottom=null
    photo.style.marginBottom=null
    app.style.marginBottom=null
})
BotonApp_2.addEventListener('click', function () {
    main.style.height=null
    Branding.style.display='none'
    web.style.display='none'
    photo.style.display='none'
    app.style.display=null
    Branding.style.position=null
    web.style.position=null
    photo.style.position=null
    app.style.position=null
    Branding.style.top=null
    web.style.top=null
    photo.style.top=null
    app.style.top=null
    Branding.style.marginBottom=null
    web.style.marginBottom=null
    photo.style.marginBottom=null
    app.style.marginBottom=null
})
// FUNCION ABRIR MENU MOBILE
menuMobile.addEventListener('click', function () {
    navMobileOculto.classList.remove('Off')
    navMobileOculto.classList.add('On')
    cuerpo.style.overflowY='hidden'
    capaOscura.classList.add('capaOscura')
})
capaOscura.addEventListener('click', function () {
    if (capaOscura.className == 'capaOscura') {
        navMobileOculto.classList.remove('On')
        navMobileOculto.classList.add('Off')
        cuerpo.style.overflowY=null
        capaOscura.classList.remove('capaOscura')
    }
})
// FUNCION PARA DUPLICAR EL FOCUS EN LOS BOTONES
botonAll.addEventListener('focus', function () {
    botonAll_2.style.background='var(--color_1)'
    botonAll_2.style.color='var(--color_2)'
})
botonAll.addEventListener('blur', function () {
    botonAll_2.style.background=null
    botonAll_2.style.color=null
})
botonBranding.addEventListener('focus', function () {
    botonBranding_2.style.background='var(--color_1)'
    botonBranding_2.style.color='var(--color_2)'
})
botonBranding.addEventListener('blur', function () {
    botonBranding_2.style.background=null
    botonBranding_2.style.color=null
})
BotonWeb.addEventListener('focus', function () {
    BotonWeb_2.style.background='var(--color_1)'
    BotonWeb_2.style.color='var(--color_2)'
})
BotonWeb.addEventListener('blur', function () {
    BotonWeb_2.style.background=null
    BotonWeb_2.style.color=null
})
BotonPhoto.addEventListener('focus', function () {
    BotonPhoto_2.style.background='var(--color_1)'
    BotonPhoto_2.style.color='var(--color_2)'
})
BotonPhoto.addEventListener('blur', function () {
    BotonPhoto_2.style.background=null
    BotonPhoto_2.style.color=null
})
BotonApp.addEventListener('focus', function () {
    BotonApp_2.style.background='var(--color_1)'
    BotonApp_2.style.color='var(--color_2)'
})
BotonApp.addEventListener('blur', function () {
    BotonApp_2.style.background=null
    BotonApp_2.style.color=null
})
botonAll_2.addEventListener('focus', function () {
    botonAll.style.background='var(--color_1)'
    botonAll.style.color='var(--color_2)'
})
botonAll_2.addEventListener('blur', function () {
    botonAll.style.background=null
    botonAll.style.color=null
})
botonBranding_2.addEventListener('focus', function () {
    botonBranding.style.background='var(--color_1)'
    botonBranding.style.color='var(--color_2)'
})
botonBranding_2.addEventListener('blur', function () {
    botonBranding.style.background=null
    botonBranding.style.color=null
})
BotonWeb_2.addEventListener('focus', function () {
    BotonWeb.style.background='var(--color_1)'
    BotonWeb.style.color='var(--color_2)'
})
BotonWeb_2.addEventListener('blur', function () {
    BotonWeb.style.background=null
    BotonWeb.style.color=null
})
BotonPhoto_2.addEventListener('focus', function () {
    BotonPhoto.style.background='var(--color_1)'
    BotonPhoto.style.color='var(--color_2)'
})
BotonPhoto_2.addEventListener('blur', function () {
    BotonPhoto.style.background=null
    BotonPhoto.style.color=null
})
BotonApp_2.addEventListener('focus', function () {
    BotonApp.style.background='var(--color_1)'
    BotonApp.style.color='var(--color_2)'
})
BotonApp_2.addEventListener('blur', function () {
    BotonApp.style.background=null
    BotonApp.style.color=null
})