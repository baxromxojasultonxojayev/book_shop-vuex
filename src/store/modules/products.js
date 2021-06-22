export default  {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: `O'tgan kunlar asari`,
          description:
            `Roman 19-asr voqealarini oʻz ichiga qamrab olgan. Murakkab tarixiy hodisalar romanning bosh qahramonlari Otabek va Kumushbibining fojiaviy sevgi qissasi atrofida ifodalangan. Voqelar rivoji mahalliy hukmdorlarning hokimiyat uchun qonli kurashlari muhitida kechadi. Boshqa yirik epik asarlardagi kabi „Oʻtkan kunlar“da ham hikoyanavislikning koʻp planliligi, ikkilamchi syujetlar mavjudligi, ketma-ket avj oluvchi va fojiali yakun topuvchi voqealar bilan toʻqnashamiz. `,
          price: 99.99,
        },
        {
          id: 'p2',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
          title: 'Mehrobdan Chayon asari',
          description: `Asarni „Mehrobdan chayon“ deb atash, ziyoli ulamolarni qahramon qilib tanlashdan murod muqaddas dargoh — sajdagohdan chiqqan, oʻsha dargohga nomunosib munofiq, qallob, tuban kimsalarga, hasadgoʻy, eʼtiqodsiz kishilarga ishoradir. Romanda Anvar bilan Raʼnoning sevgi sarguzashti, qalb nazokati shoirona tarannum etilgan. !`,
          price: 129.99,
        },
        {
          id: 'p3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Taom Retseptlari',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
      ]     
    }
  },
  getters: {
    products(state) {
      return state.products
    }
  }
}