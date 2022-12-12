import React from 'react'
import { useState, useEffect } from 'react';

// Models
import { IPaymentItem } from '../../models/models'

// A list of 'recently' added payments. 20 or so will be displayed on th ehomepage.
export default function RecentPayments() {
    
    const [ paymentItems, setPaymentItems ] = useState<Array<IPaymentItem>>([])

    useEffect(() => {
        getPayments();
    }, []);

    // Gets the recent payments stored in localStorage
    function getPayments() {
        let recentPayments = localStorage.getItem('recentPayments')

    }

    function convertLocalStorageToObject() {

    }
    // const listItems = numbers.map((number) =>
    // <li>{number}</li>
    // );
  return (
    <div id='recentPayments'>
        <h1>Recent Payments</h1>
        <h2>An overview of the last 10 days</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ea nesciunt ab eum delectus laborum ipsam. Harum quas, libero id recusandae error sint, velit et dolorem dolores sapiente illum iste.
        Adipisci laborum temporibus alias asperiores ipsa, delectus reiciendis perferendis commodi obcaecati quas hic aut quasi aperiam rerum quis explicabo. Excepturi numquam saepe incidunt dolorum. Ipsum animi accusantium ut ex dignissimos.
        Obcaecati consequatur, culpa commodi repudiandae nisi reprehenderit temporibus? Delectus expedita id nostrum rem accusantium nihil porro vitae ducimus non dicta magnam, error, quae ipsum. Inventore perferendis at omnis. Delectus, animi.
        Et nemo, sunt nulla dignissimos ea explicabo veniam, sed ad in incidunt tenetur consectetur unde officiis debitis? Nihil, officia esse. Ipsa numquam deleniti laudantium ullam. Earum neque eligendi beatae corrupti.
        Unde dicta laborum atque in autem vitae modi quidem perferendis, est quas quod sequi aliquam quaerat adipisci quibusdam ipsam distinctio corrupti corporis maiores. Distinctio quo ducimus quisquam repudiandae quos excepturi.
        Corrupti, earum est natus totam nobis eos atque omnis vitae quam aliquam reiciendis et voluptas consequatur placeat molestias. Repellendus optio ullam officiis atque rem repudiandae saepe quasi nostrum, modi ipsum.
        Aliquam fugiat minus doloribus totam, voluptas fugit atque consequatur nulla, amet animi labore consectetur laudantium corrupti temporibus tenetur quam adipisci a laborum at quas esse vero. Cum iusto voluptatum quis.
        Voluptas similique aperiam aliquam possimus hic sint? Reprehenderit sed aspernatur neque corrupti quia corporis ducimus et perspiciatis ad recusandae provident velit eius facere fuga explicabo reiciendis, tenetur dolore quibusdam quaerat!
        Rerum doloremque magni obcaecati cum saepe expedita fugit doloribus natus fugiat ex atque, libero dolorum debitis ab adipisci. Voluptas quibusdam officiis soluta delectus rem eos dignissimos minus dolorum tempora deserunt.
        Facilis alias nostrum dolorum ducimus sint! Aspernatur, delectus asperiores? Officiis eaque beatae, maiores asperiores veritatis distinctio laboriosam saepe sed iure dolores corrupti quae dicta sit accusamus aut repudiandae nemo eius?
        Vel, voluptate alias, cumque sunt neque quia temporibus natus cum consequuntur commodi sed porro recusandae reprehenderit facilis iure odit? Perferendis modi temporibus repellat quis veniam distinctio, natus consequuntur accusantium adipisci.
        Illo corporis cupiditate facilis quia officia totam earum debitis quibusdam inventore, alias sapiente, repellat laborum rem! Voluptatem est doloremque pariatur labore repudiandae, ab, repellendus ipsa fuga maxime minima nesciunt dolores!
        Cumque perferendis praesentium est, beatae eveniet nisi aperiam! Debitis explicabo quia laboriosam quo ipsam maxime perspiciatis et facilis quos. Sapiente iusto ipsum, consectetur incidunt inventore similique quam reprehenderit nam suscipit!
        Voluptates maiores vitae repellendus commodi incidunt laborum est fuga ut architecto eius distinctio nemo quasi molestiae eum animi qui tempore, corporis blanditiis expedita odio doloribus voluptatum veniam at iusto. Harum!
        Sapiente nisi libero perspiciatis modi molestiae tempore nemo ratione molestias corporis, quam vitae necessitatibus architecto numquam magnam neque minima voluptatum voluptatem deleniti provident corrupti. A laboriosam nobis repellendus perferendis itaque.
        Sunt incidunt impedit ducimus officiis qui ut voluptas adipisci inventore nemo. In amet provident expedita nesciunt optio est enim doloribus totam modi molestiae facere quae sed tempore eligendi, a atque?
        Delectus iusto veniam at eligendi optio itaque ea aperiam doloremque consequuntur natus in non, et quos voluptatum id fugit? Dolorum magni, adipisci deserunt expedita rerum fuga aspernatur quis eaque sed?
        Ea debitis rem repellendus ipsa aliquam eius, quam voluptatem, molestias vero nesciunt enim fuga quia asperiores aut. Vel, reiciendis cumque quod sed magnam reprehenderit ut exercitationem omnis, placeat cum repellat.
        Soluta minima accusantium obcaecati excepturi repellendus explicabo doloribus magnam iure quia, unde laboriosam reiciendis quod alias quidem enim sapiente voluptatibus reprehenderit, nihil distinctio praesentium mollitia fuga architecto in? Vel, blanditiis?
        Consequuntur, reprehenderit veritatis illo nam commodi quos magnam? Alias autem a eum officiis provident quasi, eveniet tempore repellendus amet ratione dolorem aspernatur, maxime expedita quisquam fuga excepturi reprehenderit possimus porro.
        A unde ab vel repellat eligendi dolor deserunt eos inventore asperiores omnis neque consectetur natus consequuntur numquam quibusdam quasi atque perspiciatis, fugit ducimus perferendis possimus assumenda. Voluptatum numquam excepturi nisi?
        Inventore quod libero totam aliquid blanditiis adipisci eius. Autem natus, quisquam hic ipsam quibusdam earum facere accusantium praesentium veniam nulla, ipsum omnis minima fuga voluptatem. Reprehenderit quis nostrum quam perspiciatis.
        Officia ipsa cum hic ut, eum necessitatibus dolorum nesciunt unde sunt illum rem, beatae aut nostrum. Ducimus suscipit ipsum velit delectus eveniet praesentium nostrum omnis laudantium. Ex, nam! Ducimus, voluptates!
        Veniam tenetur consequuntur magnam quos id odit eaque aperiam voluptatibus et. Vitae sit officiis eos, pariatur odio et non id eius, laboriosam iure eum doloremque, consectetur commodi mollitia rerum rem.
        Ut cupiditate unde sit culpa esse autem accusantium nesciunt inventore, ad nobis in accusamus, illum iure cumque sint praesentium fugiat dolor nam laudantium, dolore beatae magnam aut provident similique. Commodi!
        Totam quasi, amet quis quo maiores voluptatum obcaecati dignissimos numquam impedit, tempora minus molestiae dolorem natus officiis deserunt enim assumenda deleniti. Aut reiciendis dolor quos, corrupti reprehenderit facilis veniam earum!
        Officiis voluptates at cupiditate voluptatibus veniam ducimus harum incidunt deserunt possimus ipsum accusamus numquam tempore ipsam vero nostrum exercitationem nesciunt, ut repellat ullam iste commodi deleniti molestias cumque? Non, assumenda?
        Quod tempore corporis commodi animi, illo ducimus laboriosam praesentium quidem impedit, quas cumque? Libero dolore explicabo repellendus itaque. Veritatis veniam commodi quaerat iure aperiam accusamus est qui vel laboriosam amet.
        Exercitationem, dolores quas? Aspernatur adipisci aliquam laborum, vero commodi eveniet, sit dicta minima, deleniti voluptatibus cum aperiam sed. Eum adipisci odio pariatur voluptatum eos nisi itaque earum aliquid enim molestias.
        Enim deleniti ullam corporis architecto voluptates, soluta officiis laudantium eligendi consectetur nulla sapiente necessitatibus sit consequatur praesentium, delectus optio modi et maiores vero. Animi, nisi beatae! Possimus ex hic delectus?
        Unde assumenda voluptas consequuntur minima ipsa dolorem molestiae cupiditate dolores accusantium. Nostrum quis non cum similique minima impedit consequatur temporibus voluptas, atque, quos deleniti doloremque omnis iure cupiditate, consequuntur eum.
        Enim, quia sit optio dicta voluptates sint. Numquam in quasi inventore omnis accusantium tenetur ipsum dicta aliquam consectetur laborum deleniti quae quo error sed consequuntur, atque, dolore nihil. Adipisci, excepturi!
        Facilis vero esse quam deserunt cumque, eligendi quo magnam. Expedita quos blanditiis corrupti, officiis modi asperiores dignissimos. Aliquam eveniet nobis earum, harum mollitia tenetur inventore. Expedita nisi nostrum libero numquam.
        Odit facere iure, voluptatum natus eius non quisquam iusto ad repellendus minima quia? Perspiciatis impedit quam sunt, consequuntur adipisci quia, repudiandae dolore nostrum assumenda commodi recusandae illo non minima odio!
        Fuga ullam at non officiis maiores. Ipsum est repellat iusto suscipit, debitis animi incidunt. Odio voluptates, eos deserunt quas suscipit ipsam illum eligendi ratione aliquid dignissimos autem dolor quam repellendus.
        Facere praesentium ipsa veniam esse nemo laborum quam, ex iste amet culpa fuga vitae id unde perspiciatis, at corrupti ea dicta porro accusamus temporibus! Labore alias obcaecati ab eius! Dicta.
        Unde minima perferendis quidem recusandae? Porro mollitia a libero. Animi earum praesentium, hic accusantium rerum dicta! Nemo ducimus natus eum accusamus doloribus! Perferendis aliquid aperiam, delectus recusandae deleniti numquam fugit.
        Delectus vero laudantium in quaerat provident sint explicabo inventore neque omnis! Officia, quisquam. Magni praesentium ullam nisi quia dolore suscipit at velit voluptates fugiat, tempora quis, quasi, hic incidunt aliquid!
        Totam exercitationem quod cupiditate facere, quasi quis, atque ab voluptate ex quo dolores accusantium quibusdam accusamus nesciunt modi, alias tempora id maiores deleniti hic dolorum obcaecati vero soluta. Mollitia, quis.
        Voluptatibus sapiente cumque tenetur obcaecati ipsum repellendus illo voluptates ullam! Maxime repudiandae esse doloribus rem cum, mollitia enim tenetur eveniet similique consequatur, asperiores eaque, ipsam eos? Quos vitae animi ullam.
        Sint eligendi iure consequuntur, culpa voluptates cumque saepe fuga sunt ad non, nobis facilis tenetur qui autem nostrum quia obcaecati eaque accusamus? Iure excepturi dicta odio omnis quis tenetur quos.
        Distinctio nulla facilis veritatis adipisci nobis aliquid? Velit asperiores, illo quam dolorem odio iste quis cupiditate labore perferendis modi repudiandae, optio dignissimos doloribus eius ipsam, consectetur nam consequatur deleniti? Totam.
        Atque in ratione temporibus animi corporis, sint necessitatibus nihil numquam reiciendis labore quis quas quo ut accusantium voluptate recusandae at provident autem quos ipsa. Blanditiis aut quas atque officia reprehenderit?
        Reiciendis molestias accusamus animi. Voluptates eveniet cupiditate odit recusandae quisquam fugit quae mollitia, iste magnam nesciunt laborum perferendis molestiae veniam earum nulla quasi non doloremque quo voluptatem quam atque rem.
        Veritatis error sunt voluptatum commodi natus eum dicta possimus laboriosam. Dignissimos labore deserunt, enim asperiores omnis quasi recusandae harum doloribus ullam repudiandae, autem beatae explicabo quae ratione exercitationem animi optio.
        Facilis hic repellendus consequuntur excepturi dicta praesentium a deleniti iste aliquam similique iusto molestias porro tempora ipsam, repellat voluptatem dolore amet dolorum provident officiis nostrum repudiandae fuga. Accusantium, totam saepe.
        Ad facere doloribus labore, eius laborum qui maiores porro explicabo provident incidunt impedit! Dolore id ipsum, eveniet quaerat quisquam rem aspernatur doloremque quam, alias laboriosam temporibus excepturi! Fugit, iste quasi.
        Repellendus, distinctio deleniti. Aliquid voluptas doloribus cupiditate alias similique ad ut exercitationem, nesciunt laborum repellat nihil eos ab consequuntur adipisci temporibus. Sed, eius adipisci! Excepturi nobis magnam eligendi minus ad!
        Exercitationem ea alias aliquam laboriosam. Architecto sint deleniti blanditiis facilis cum aspernatur, voluptates, laudantium commodi excepturi consequatur temporibus accusantium ab, eius quod id rerum pariatur tempore debitis harum aliquam provident!
        Perspiciatis saepe quaerat doloremque dignissimos officiis delectus quasi atque dolores, provident exercitationem dolorem maiores vitae, hic distinctio at cumque ad veniam quae reprehenderit, cum magnam nobis dolore libero. Explicabo, dicta.</p>
    </div>
  )
}
