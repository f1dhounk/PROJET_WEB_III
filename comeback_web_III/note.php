<?php
	require_once("action/NoteAction.php");

	$action = new NoteAction();
	$data = $action->execute();

	require_once("lespartial/partial_notes/header.php");
?>

<div class="save" ></div>

<div class="write" >
    <h1> NOTES / COMMENTAIRES </h1>

    <form action="" method="GET" >

        <div class="commentaire">
            
            <div class="sujet">
                <input type="text" name="sujet" required placeholder="Votre sujet" style="width: 900px; height: 50px;" >
            </div>

            <div class="descr">
                <input name="descr" required placeholder="Votre description" style="width: 900px; height: 50px;" >
            </div>
            
            <div class="note">
                <textarea name="notes" required placeholder="Vos notes" style="width: 900px; height: 100px;" ></textarea>
            </div>

            <div class="send-btn">
                <a href="envoyer=true"><button>Envoyer</button></a>
            </div>

        </div>

    </form>

</div>

<?php
	require_once("lespartial/partial_notes/footer.php");