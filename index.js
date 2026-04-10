document.getElementById('generateBtn').addEventListener('click', generateUser);

async function generateUser() {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();

    const user = data.results[0];

    document.getElementById('result').innerHTML = `
    
    <div class="user-card">

        <img src="${user.picture.large}" class="avatar">

        <h2>${user.name.first} ${user.name.last}</h2>

        <div class="info-grid">

            <div class="info-box">
                <p><ion-icon name="mail-outline"></ion-icon> Email</p>
                <h4>${user.email}</h4>
            </div>

            <div class="info-box">
                <p><ion-icon name="call-outline"></ion-icon> Phone</p>
                <h4>${user.phone}</h4>
            </div>

            <div class="info-box full">
                <p>Address</p>
                <h4>${user.location.street.number} ${user.location.street.name}, ${user.location.city}</h4>
            </div>

            <div class="info-box">
                <p>Date of Birth</p>
                <h4>${user.dob.date.slice(0,10)}</h4>
            </div>

            <div class="info-box">
                <p>Gender</p>
                <h4>${user.gender}</h4>
            </div>

            <div class="info-box">
                <p>Nationality</p>
                <h4>${user.nat}</h4>
            </div>

            <div class="info-box">
                <p>Username</p>
                <h4>${user.login.username}</h4>
            </div>
               <div class="info-box full">
                <p>Password</p>
                <h4>${user.login.password}</h4>
            </div>

        </div>

    </div>
    `;
}