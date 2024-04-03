import CalendarIcon from '@assets/CalendarIcon'
import dayjs from 'dayjs'
import { FC, useState } from 'react'
import { Alert, Pressable, Text } from 'react-native'
import DatePickerComponent from 'react-native-date-picker'

import { styles } from './Datepicker.styles'

interface DatepickerProps {
  date: Date
  setDate: (date: Date) => void
}

const Datepicker: FC<DatepickerProps> = ({ date, setDate }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Pressable onPress={() => setOpen(true)} style={styles.input}>
        <CalendarIcon />
        <Text>{dayjs(date).format('DD-MM-YYYY')}</Text>
      </Pressable>
      <DatePickerComponent
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={(newDate) => {
          setOpen(false)

          if (dayjs(newDate).isBefore(dayjs(), 'D')) {
            Alert.alert('Selected date should be in the future')
            return null
          }

          setDate(newDate)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </>
  )
}

export default Datepicker
