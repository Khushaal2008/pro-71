import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class ReadScreen extends React.Component{
    render()
    {
        return(
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'green' }}>


          <Text style={{fontSize:15,color:"pink"}}>In a village, lived a carefree boy with his father. The boy’s father told him that he was old enough to watch over the sheep while they graze in the fields. Every day, he had to take the sheep to the grassy fields and watch them as they graze. However, the boy was unhappy and didn’t want to take the sheep to the fields. He wanted to run and play, not watch the boring sheep graze in the field. So, he decided to have some fun. He cried, “Wolf! Wolf!” until the entire village came running with stones to chase away the wolf before it could eat any of the sheep. When the villagers saw that there was no wolf, they left muttering under their breath about how the boy had wasted their time. The next day, the boy cried once more, “Wolf! Wolf!” and, again, the villagers rushed there to chase the wolf away.
          
          The boy laughed at the fright he had caused. This time, the villagers left angrily. The third day, as the boy went up the small hill, he suddenly saw a wolf attacking his sheep. He cried as hard as he could, “Wolf! Wolf! Wolf!”, but not a single villager came to help him. The villagers thought that he was trying to fool them again and did not come to rescue him or his sheep. The little boy lost many sheep that day, all because of his foolishness.</Text>
        </View>
        )
    }
}
