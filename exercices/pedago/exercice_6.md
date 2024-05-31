# Contexte

Cet exercice est un peu plus long et complexe. Le but étant qu'ils arrivent à interpréter ce que leur demande la recette et/ou Pédro en HTML/CSS.

N'hésitez pas à les aider sur la compréhension des commandes à utiliser.

# Objectif

Voici les étapes dans lesquelles le sujet les attend :
- Rajouter un élement de liste (ul/li) pour le beurre
- Rendre le beurre grand et gras
    - Minmium 30px de font-size
    - Minimum 700 de font-weight
- Créer des checkbox pour chaque entrée de la recette (mentionnez bien la notion de name)
- Cocher les checkbox

# Attendu

En HTML voici à peu près l'attendu au niveau de la recette : 
```
<ul class="recette">
    <!--
        Pour que Pédro valide votre recette, respectez bien la syntaxe !
    -->
    <li id="rhubarbe">
        <span>100g de rhubarbe</span>
        <input type="checkbox" name="rhubarbe"></input>
    </li>
    <li id="farine">
        <span>200g de farine</span>
        <input type="checkbox" name="farine"></input>
    </li>
    <li id="sucre">
        <span>50g de sucre de canne</span>
        <input type="checkbox" name="sucre"></input>
    </li>
    <li id="oeuf">
        <span>1 oeuf</span>
        <input type="checkbox" name="oeuf"></input>
    </li>
    <li id="beurre">
        <span class="beurre">1kg de beurre</span>
        <input type="checkbox" name="beurre"></input>
    </li>
</ul>
```
Et pour le style du beurre :
```
.beurre {
    font-weight: bold;
    font-size: 30px;
}
```
Ils ne sont pas obligés de créer une classe beurre pour le span mais c'est conseillé plutôt qu'une balise style (il faut bien qu'ils apprennent à faire les choses proprement :) )