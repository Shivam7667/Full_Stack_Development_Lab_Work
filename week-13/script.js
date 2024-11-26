document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const countryInput = document.getElementById('country-input');
    const universityList = document.getElementById('university-list');

    searchBtn.addEventListener('click', () => {
        const country = countryInput.value.trim();
        if (country) {
            fetchUniversities(country);
        }
    });

    async function fetchUniversities(country) {
        try {
            const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
            const data = await response.json();
            displayUniversities(data);
        } catch (error) {
            console.error('Error fetching universities:', error);
        }
    }

    function displayUniversities(universities) {
        universityList.innerHTML = '';
        universities.forEach(university => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${university.name}</strong><br>
                <a href="${university.web_pages[0]}" target="_blank">Visit Website</a><br>
                ${university['state-province'] ? university['state-province'] : 'N/A'}
            `;
            universityList.appendChild(li);
        });
    }
});
