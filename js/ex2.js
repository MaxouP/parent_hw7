const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

const $autocomplete = document.getElementById('suggestions');
const $textbox = document.getElementById('country');

$textbox.addEventListener('input', event => {
  const input = event.target.value;

  updateAutocomplete(input);
});

function updateAutocomplete(input = "") {
  const suggestions = countryList.filter(country => country.toLocaleLowerCase().startsWith(input.toLowerCase()));

  clearSuggestions();
  setSuggestions(suggestions);
}

function clearSuggestions() {
  [...$autocomplete.children].forEach($item => $item.remove());
}

function setSuggestions(suggestions) {
  for (const suggestion of suggestions) {
    const $suggestion = document.createElement('p');

    $suggestion.textContent = suggestion;
    $autocomplete.appendChild($suggestion);
  }
}

suggestions.appendChild()