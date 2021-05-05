var images = ["http://3doz1i2eztq711nqzp2is66b-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Father.jpg", "https://media.istockphoto.com/photos/son-is-kissing-his-mother-picture-id1132365439?k=6&m=1132365439&s=612x612&w=0&h=Nf3xe6Tqkpd6Dumo1Dm-um9SePZBZMZRJVsoW-aTy48=", "https://activeforlife.com/content/uploads/2015/11/mother-plays-with-active-son.jpg", "https://i.pinimg.com/originals/27/72/ed/2772edd652c534c175f3386e30034a62.jpg"];
var names=["Father","Mother","Son","Family Book"];
var i=0;
function next(){
    document.getElementById("family_member_image").src=images[i];
    document.getElementById("family_member_name").src=names[i];
    i++;
    if (i > 3) {
        i = 0;
    }
}


