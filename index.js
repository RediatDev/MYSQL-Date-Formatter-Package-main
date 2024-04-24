let a = '2023-09-10T06:56:37.000Z'

function splitter(passedValue,timePreference,dayPreference,displayPreference) {
    let firstRefined = passedValue.replace(/[-:.T]/g, '');
    let finalRefined = firstRefined.slice(0,-4)
     let yearStore= finalRefined.slice(0,4);
 
     let dateStore =finalRefined.slice(6,8);
 
     let monthStore=finalRefined.slice(4,6)
 
     let timeStore = finalRefined.slice(8)
 
     let hour = timeStore.slice(0,2)
     let min = timeStore.slice(2,4)
     let sec = timeStore.slice(4)
      
     switch (displayPreference) {
         case 'Y-O':
               return`${yearStore}`
         case 'D-N':
               return`${dateStore}`
         case 'M-N' :
            return `${monthStore}`
         case 'M-T' :
                switch (monthStore) {
                    case '01':
                          return 'Jan'
                    case '02':
                          return 'Feb'
                    case '03':
                          return 'Mar'
                    case '04':
                          return 'Apr'
                    case '05':
                          return 'May'
                    case '06':
                          return 'Jun'
                    case '07':
                          return 'jul'
                    case '08':
                          return 'Aug'
                    case '09':
                          return 'Sep'
                    case '10':
                          return 'Oct'
                    case '11':
                          return 'Nov'
                    case '12':
                          return 'Dec'
                    default:
                        return 'Invalid Month'
                }
         case 'D-M-T':
            switch (monthStore) {
                case '01':
                      return `${dateStore}${displayPreference}Jan`
                case '02':
                      return `${dateStore}${displayPreference}Feb`
                case '03':
                      return `${dateStore}${displayPreference}Mar`
                case '04':
                      return `${dateStore}${displayPreference}Apr`
                case '05':
                      return `${dateStore}${displayPreference}May`
                case '06':
                      return `${dateStore}${displayPreference}Jun`
                case '07':
                      return `${dateStore}${displayPreference}jul`
                case '08':
                      return `${dateStore}${displayPreference}Aug`
                case '09':
                      return `${dateStore}${displayPreference}Sep`
                case '10':
                      return `${dateStore}${displayPreference}Oct`
                case '11':
                      return `${dateStore}${displayPreference}Nov`
                case '12':
                      return `${dateStore}${displayPreference}Dec`
                default:
                    return 'Invalid Month'
            }
         case 'D-T-M-N':
            return `${dateStore}`
         case 'D-N-M-T':
            return `${dateStore}`
         case 'D-M-N':
            return `${dateStore}`
         case 'D-T-Y':
            return `${dateStore}`
         case 'D-N-Y':
            return `${dateStore}`
         case 'M-T-Y':
            return `${dateStore}`
         case 'M-N-Y':
            return `${dateStore}`
         case 'D-T-M-T-Y':
            return `${dateStore}`
         case 'D-T-M-N-Y':
            return `${dateStore}`
         case 'D-N-M-T-Y':
            return `${dateStore}`
         case 'D-N-M-N-Y':
            return `${dateStore}`
     }


    }


    splitter(a)