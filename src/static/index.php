<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Choisir un créneau</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
    <link rel="stylesheet" href="index.css">
</head>
<body>
<div class="modal" id="creneaux-modal">
    <div class="modal-background"></div>
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Définissez un créneau</p>
            <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
            <!-- Content ... -->
        </section>
        <footer class="modal-card-foot">
            <button class="button is-success" id="modal-validate">Valider</button>
            <button class="button" id="modal-cancel">Annuler</button>
        </footer>
    </div>
</div>
<section class="section">
    <button class="button is-danger is-light" id="housekeeping-enter">Housekeeping</button>
    <div class="container">
        <form class="notification is-main-square">
            <div class="super-container">
                <div class="field is-horizontal">
                    <div class="field-body">

                        <!--            Prénom            -->
                        <div class="field">
                            <div class="control is-expanded">
                                <input class="input" type="text" name="prename" placeholder="Prénom">
                            </div>
                        </div>

                        <!--            Nom            -->
                        <div class="field">
                            <div class="control is-expanded">
                                <input class="input" type="text" name="lastname" placeholder="Nom">
                            </div>
                        </div>
                    </div>


                </div>

                <!--            Phone number            -->
                <div class="field">
                    <div class="control is-expanded has-icons-left">
                        <input class="input" type="tel" name="phone" placeholder="Téléphone">
                        <span class="icon is-left">
                            <i class="fas fa-mobile"></i>
                        </span>
                    </div>
                </div>

                <!--            Baptême            -->
                <div class="field is-horizontal">
                    <label class="label pr-5">Baptême</label>
                    <div class="field-body">
                        <div class="field is-narrow">
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="member">
                                    Oui
                                </label>
                                <label class="radio">
                                    <input type="radio" name="member">
                                    Non
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="button is-primary is-light" id="validate_form">Valider</button>

            </div>

        </form>
    </div>
</section>
<script src="app/index.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
</body>
</html>