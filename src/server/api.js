import axios from 'axios'

const KEY = 'ac1b0b1572524640a0ecc54de453ea9f'
const LIST_URL = `http://partnerapi.funda.nl/feeds/Aanbod.svc/${KEY}/?type=koop&zo=/amsterdam`
const DETAILS_URL = `http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/${KEY}/koop`

// Receives the original details payload and return a focused one
function mapHouse(data) {
  return {
    address: data.Adres,
    postCode: data.Postcode,
    description: data.VolledigeOmschrijving,
    price: { amount: data.Prijs.Koopprijs, compl: data.Prijs.KoopAbbreviation },
    photos: data.Media
      .filter(media => media.Categorie === 1)
      .filter((media, index) => index < 8)
      .map(media => ({ thumb: media.MediaItems[1].Url, large: media.MediaItems[3].Url })),
    features: data.KenmerkenKort.Kenmerken.map(item => ({ title: item.Naam, info: item.Waarde })),
  }
}

// Receives the original search payload and return a focused one
function mapList(data) {
  return data.Objects.map(house => ({
    id: house.Id,
    address: house.Adres,
    photo: house.FotoMedium,
  }))
}

export async function getDetails(req, res) {
  const { id } = req.query
  const apiUrl = `${DETAILS_URL}/${id}`
  const result = await axios.get(apiUrl)
  const house = mapHouse(result.data)

  res.json(house)
}

export async function getList(req, res) {
  const result = await axios.get(LIST_URL)
  const list = mapList(result.data)

  res.json(list)
}
