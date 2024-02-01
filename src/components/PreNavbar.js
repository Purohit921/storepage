import React from 'react'
import "../styles/PreNavbar.css"

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M286.788 975Q257 975 236 953.788q-21-21.213-21-51Q215 873 236.212 852q21.213-21 51-21Q317 831 338 852.212q21 21.213 21 51Q359 933 337.788 954q-21.213 21-51 21Zm400 0Q657 975 636 953.788q-21-21.213-21-51Q615 873 636.212 852q21.213-21 51-21Q717 831 738 852.212q21 21.213 21 51Q759 933 737.788 954q-21.213 21-51 21ZM235 315l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841 297 829 318L694 561q-11 19-28.559 30.5Q647.881 603 627 603H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z"/></svg>


const PreNavbar = () => {
  return (
    <div className='preNav'>
        <div>
            <a href="https://www.mi.com/in/">MI INDIA</a>
            <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a>
            <a href="https://www.mi.com/in/service/hrlp/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a>
            <a href="https://www.mi.com/in/service/authorized_stores">RETAIL STORE</a>
            <a href=""></a>
        </div>
        <div>
            <a href="https://account.xiaomi.com/fe/service/login/password?_locale=en_IN&checkSafePhone=false&sid=i18n_in_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fstore.mi.com%25252Fin%25252Flogin%25252Fcallback%25253Ffollowup%25253D%2525252F%2525252Fwww.mi.com%2525252Fin%2525252Fuser%252526sign%25253DZGNlYWI5ZTQ3NTZhNWNhMWRmZTQyMmQ5M2Y0ZTUxNGEwNTcyMTNlNg%25252C%25252C%2526sid%253Di18n_in_pc_pro%2526_locale%253Den_IN%2526checkSafePhone%253Dfalse&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3D%252F%252Fwww.mi.com%252Fin%252Fuser%26sign%3DZGNlYWI5ZTQ3NTZhNWNhMWRmZTQyMmQ5M2Y0ZTUxNGEwNTcyMTNlNg%2C%2C&_sign=BTyNaZEwdjR5wFJbr7req3kEHro%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=">SIGN IN</a>
            <a href="https://in.account.xiaomi.com/fe/service/register?bizDeviceType=&theme=&needTheme=false&showActiveX=false&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&_locale=en_IN&checkSafePhone=false&_sign=BTyNaZEwdjR5wFJbr7req3kEHro%3D&source=&region=IN&sid=i18n_in_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fstore.mi.com%25252Fin%25252Flogin%25252Fcallback%25253Ffollowup%25253D%2525252F%2525252Fwww.mi.com%2525252Fin%2525252Fuser%252526sign%25253DZGNlYWI5ZTQ3NTZhNWNhMWRmZTQyMmQ5M2Y0ZTUxNGEwNTcyMTNlNg%25252C%25252C%2526sid%253Di18n_in_pc_pro&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3D%252F%252Fwww.mi.com%252Fin%252Fuser%26sign%3DZGNlYWI5ZTQ3NTZhNWNhMWRmZTQyMmQ5M2Y0ZTUxNGEwNTcyMTNlNg%2C%2C&_uRegion=IN">SIGN UP</a>
            <a href="https://store.mi.com/in/cart">{cartIcon}</a>
        </div>
    </div>
  )
}

export default PreNavbar