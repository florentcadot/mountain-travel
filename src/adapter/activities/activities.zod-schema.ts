import { z } from 'zod'

export const CreateActivitySchema = z.object({
  title: z.string(),
  description: z.string(),
  specSheetUrl: z.string().optional(),
  imageUrl: z.string().optional(),
  startDate: z.string().transform((str) => new Date(str)),
  endDate: z.string().transform((str) => new Date(str)),
  country: z.string(),
  city: z.string().optional(),
  postcode: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional()
}).refine(data => data.endDate > data.startDate, {
  message: 'endDate must be later than startDate',
  path: ['endDate']
})
