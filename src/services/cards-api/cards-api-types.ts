import { DecksPagination } from '@/services/decks-api/decks-api.types'

export type CardResponse = {
  items: CardsItem[]
  pagination: DecksPagination
}
export type CardsItem = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}
export type CardRate = {
  cardId: string
  grade: number
  packId: string
}
export type CardsParams = {
  answer?: string
  currentPage?: number
  itemsPerPage?: number
  orderBy?: string
  question?: string
} | void