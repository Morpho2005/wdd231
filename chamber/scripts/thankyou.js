const info = new URLSearchParams(window.location.search);
const thanks = document.querySelector("#thanks")
console.log(info)

thanks.innerHTML = `<p>Thank you, ${info.get('first')} ${info.get('last')}, for becoming a ${info.get('membership')} member</p>
        <ul>
            <li>first Name: ${info.get('first')}</li>
            <li>Last Name: ${info.get('last')}</li>
            <li>Title: ${info.get('title')}</li>
            <li>Email: ${info.get('email')}</li>
            <li>Phone Number: ${info.get('phone')}</li>
            <li>Business Name: ${info.get('business')}</li>
            <li>Membership Level: ${info.get('membership')}</li>
            <li>Company Description: ${info.get('description')}</li>
            <li>Time: ${info.get('time')}</li>
        </ul>`