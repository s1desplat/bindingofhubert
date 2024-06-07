# Contexte

Il s'agit du dernier exercice, on s'attend donc à une certaine autonomie à ce niveau. Cependant, le sujet reste assez libre (création d'un formulaire). Donc si vous voyez que les apprenants vont tout droit dans une mauvaise direction n'hésitez pas à les aiguiller si nécessaire.

# Objectif

Voici les étapes dans lesquelles le sujet les attend :
- Créer un formulaire avec un ID précis `cerfa-67042-b`
- Créer plusieurs champs de classe `cerfa-element`
    - Un champ `input`
    - Un champ `date`
    - Un champ `select`
        - Doit contenir 5 options avec les values `reine|roi|intendant|mage|cuisine`
- Créer un bouton `submit`
- Remplir le formulaire correctement (le JS les corrige en cas d'erreur)
    - Input => "hubert"
    - Date => Date du jour
    - Select => `mage`
- Valider leur formulaire (envoi du submit)

# Attendu

Voici un exemple de formulaire valide: 
```
<form id="cerfa-67042-b">
    <div class="cerfa-element">
        <label for="pseudonyme">Pseudonyme</label>
        <input type="text" name="pseudonyme">
    </div>

    <div class="cerfa-element">
        <label for="date">Date de demande d'entretien</label>
        <input type="date" name="date">
    </div>

    <div class="cerfa-element">
        <label for="personne">Personne que vous venez quérir</label>
        <select name="personne" id="personne">
            <option value="reine">Sa Majesté La Reine Dénej</option>
            <option value="roi">Son Altesse Le Roi Consort Tilèj</option>
            <option value="intendant">Intendant à la Cour Jean-Eustache De La Plata</option>
            <option value="mage">Mage de la Cour Pédro De La Vega</option>
            <option value="cuisine">Commis aux cuisines de la Cour Philippe-Pochtron</option>
        </select>
    </div>

    <input type="submit" value="Envoyer le CERFA"/>
</form>
```
Le plus important est de renseigner correctement les values et les id sur la majorité des éléments pour passer la validation, les champs textes ne sont pas directement vérifiés.