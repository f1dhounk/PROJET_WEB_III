<?php
	require_once("action/NoteAction.php");

	$action = new NoteAction();
	$data = $action->execute();

	require_once("lespartial/partial_notes/header.php");
?>

<div class="save" >

    <?php
        foreach($data["result"] as $result) {
            ?>
                <div class="les_notes">
                    <div class="a_temp">
                        Date : <?= $result["temp"] ?>
                    </div>
                    <div class="a_sujet">
                        Sujet : <?= $result["sujet"] ?>9
                    </div>
              
                    <div class="a_notes">
                        Note : <?= $result["notes"] ?>
                    </div>

                    <div class="gen_btn" >
                        
                        <form action="" method="POST">
                            <input type="hidden" name="id" value=<?= $result["id"] ?> >
                            <div class="supp_btn">
                                <button>SUPPRIMER</button>
                            </div>
                        </form>

                        <div class="modif_btn">
                            <button onclick="modif('<?= $result['sujet'] ?>', '<?= $result['notes'] ?>', '<?= $result['id'] ?>')" >MODIFIER</button>
                        </div>

                    </div>
                </div>
            <?php
        }
    ?>

</div>

<div class="write" >
    <h1> NOTES / COMMENTAIRES </h1>

        <div class="commentaire">

            <form action="" method="GET" >
            
                <div class="sujet">
                    <input type="text" name="sujet" required placeholder="Votre sujet" style="width: 50%; height: 50px;" >
                </div>
                
                <div class="note">
                    <textarea name="notes" required placeholder="Vos notes" style="width: 50%; height: 100px;" ></textarea>
                </div>

                <div class="send-btn">
                    <button>ENVOYER</button>
                </div>
            </form>

            <div class="retour" >
                <a href="lobby.php"><button>RETOUR</button></a>
            </div>
          
        </div>

   

   
    
</div>

<?php
	require_once("lespartial/partial_notes/footer.php");