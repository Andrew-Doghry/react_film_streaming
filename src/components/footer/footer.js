import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitch,faFacebook,faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import React from "react";
import './footer.css'
export default function Footer (){
return (
<footer>
<a href="https://www.twitter.com/"target={'_blank'}>
<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
</a>
<a href="https://www.youtube.com/"target={'_blank'}>
<FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
</a>
<a href="https://www.facebook.com/" target={'_blank'}>
<FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
</a>
<a href="https://www.twitch.tv/"target={'_blank'}>
<FontAwesomeIcon icon={faTwitch}></FontAwesomeIcon>
</a>

</footer>


)

}