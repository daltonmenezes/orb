# ORB :globe_with_meridians:
Your friendly JavaScript languages handler. ORB turns fastly and easily your website/project to multilingual.

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/daltonmenezes/orb/blob/master/LICENSE)

### What's the advantage?

- No dependecies
- Simple to use
- Identifies and loads automatically the language available based on the user browser language in their first access.
- Saves and restores automatically the language selected by the user even if the page or browser will be closed.
- Works with any html parameters in addition to text contents inside the tags (e.g titles, values, placeholders... whatever).

[See ORB in action](https://daltonmenezes.github.io/orb/example.html)

# Functions

### translateTo

Translates the page to given object language.

*Syntax*
```js
orb.translateTo(Object language);
```
*Example*
```js
orb.translateTo(pt_br);
```

# Usage
Add **orb=""** parameter in all tags you want to support and give any names like an ID.
```html
<h1 orb="welcome">Welcome to ORB</h1>
<a href="#" orb="english" onclick="orb.translateTo(en)">English</a>
<a href="#" orb="pt_br" onclick="orb.translateTo(pt_br)">Brazilian Portuguese</a>
```
Create a language file in **src/languages/** folder. (e.g **english.js**) 
The **_language** property is required and must have the same name from the object (e.g **en** and **_language: 'en'**).
```js
en = {
  _language: 'en',
  welcome: 'Welcome to ORB',
  english: 'English',
  pt_br: 'Brazilian Portuguese'  
};
```
The **welcome**, **english** and **pt_br** properties are targets and tells to ORB to switch to this texts in the tags that has this parameteres. That is, ORB will change the texts from **orb="welcome"**, **orb="english"** and **orb="pt_br"** in the HTML elements. So, you must use the same names between these properties.

Now, you need to create another language file in **src/languages/** folder. (e.g **pt-br.js**)

```js
pt_br = {
  _language: 'pt_br',
  welcome: 'Seja bem vindo ao ORB',
  english: 'Inglês',
  pt_br: 'Português'
};
```
Back to the HTML file and insert before the body closed tag (**`</body>`**) your language files and orb.js after that.
```js
<script src="src/languages/english.js"></script>
<script src="src/languages/pt-br.js"></script>
<script src="src/orb.js"></script>
```
It's done!

# Translating multiple parameters in a tag

The syntax is **{ html parameter name: 'value' }**. So, put more parameters with values together separating these by commas from the others in your **language object**.

## Example

Putting a text and a title **(caption)** in a property named button:
```js
button: {text: 'English', title: 'Switch to English'}
```
Putting a placeholder and a title in a property named inputName:
```js
inputName: {placeholder: 'Type your name', title: 'Click and type your name.'}
```
# Recommendations

For the ORB can be work fine to identify and load automatically the language available based on the user browser language in their first access you need to respect the **ISO language code table** when you give the name to your **language object** and **_language** property. You can check the table [here](http://www.lingoes.net/en/translator/langcode.htm).

Select the language code as you want, replace the **- (hyphen)** to **_ (underscore)** and put it in lowercase.

### Example

**pt-BR** to **pt_br**
```js
pt_br = {
  _language: 'pt_br'
};
```

# Contributing

Contributions are always welcome. 
Keep the code more simple as you can and indent it using 2 spaces size.

Before you writing anything, feature or bug fix:

- Check if there is already an issue related to it (opened or closed) and if someone is already working on that;
    - If there is not, open an issue and notify everybody that you're going to work on that;
    - If there is, create a comment to notify everybody that you're going to work on that.
- Make sure that what you need is not done yet.

So, let's go:

- Fork it!
- Create your feature branch: git checkout -b my-new-feature
- Commit your changes: git commit -m 'Add some feature'
- Push to the branch: git push origin my-new-feature
- Send your pull request.

After your pull request is merged, you can safely delete your branch.
