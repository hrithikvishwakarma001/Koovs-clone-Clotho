import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Text, VStack, useDisclosure } from "@chakra-ui/react"
import { useRef, useState } from "react"
import CartProduct from "../component/CartProduct"
import styled from "@emotion/styled"

export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const [cartData, setCartData]=useState([ {
    "_id": "645789a10ce88899e40711ff",
    "articleCode": "1136245001",
    "onClick": "setOsaParameters(utag_data.category_id,'SMALL','1136245001'); setNotificationTicket('Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTEzNjI0NV9ncm91cF8wMDFfZW5faW47MTEzNjI0NTAwMV9lbl9pbjtPQkpFQ1RJVkUkO05PTkU6Tk9ORTs1Nzs','1136245001');",
    "link": "/en_in/productpage.1136245001.html",
    "title": "Oversized Fit Twill ",
    "category": "men_shirts_longsleeved",
    "image": [
      {
        "src": "//lp2.hm.com/hmgoepprod?set=source[/65/24/652497d57b4a5450a99a739958408c2b5c070b6d.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
        "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/d4/80/d480a20c3d273e703e14d96c654d857af89f9007.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
        "alt": "Oversized Fit Twill overshirt Model",
        "dataAltText": "Oversized Fit Twill overshirt"
      }
    ],
    "legalText": "",
    "promotionalMarkerText": "",
    "showPromotionalClubMarker": false,
    "showPriceMarker": false,
    "favouritesTracking": "Favourites|1136245001|Oversized Fit Twill overshirt|MEN_SHOPBYPRODUCT : SHIRTS_SHIRTS : VIEWALL_VIEW_ALL",
    "favouritesSavedText": "SAVED AS FAVOURITE",
    "favouritesNotSavedText": "SAVE AS FAVOURITE",
    "marketingMarkerText": "",
    "marketingMarkerType": "",
    "marketingMarkerCss": "",
    "price": "Rs.2,999.00",
    "redPrice": "",
    "yellowPrice": "",
    "bluePrice": "",
    "clubPriceText": "",
    "sellingAttribute": "",
    "swatchesTotal": "1",
    "swatches": [
      {
        "colorCode": "#F0EFEC",
        "articleLink": "/en_in/productpage.1136245001.html",
        "colorName": "White"
      }
    ],
    "preAccessStartDate": "",
    "preAccessEndDate": "",
    "preAccessGroups": [],
    "outOfStockText": "",
    "comingSoon": "",
    "brandName": "H&M",
    "damStyleWith": ""
  },
  {
    "_id": "645789a10ce88899e4071200",
    "articleCode": "0735094011",
    "onClick": "setOsaParameters(utag_data.category_id,'SMALL','0735094011'); setNotificationTicket('Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDczNTA5NF9ncm91cF8wMTFfZW5faW47MDczNTA5NDAxMV9lbl9pbjtPQkpFQ1RJVkUkO05PTkU6Tk9ORTs1Nzs','0735094011');",
    "link": "/en_in/productpage.0735094011.html",
    "title": "Cotton Shirt Muscle Fit",
    "category": "men_shirt_dressed_slimfit",
    "image": [
      {
        "src": "//lp2.hm.com/hmgoepprod?set=source[/3a/d5/3ad51ac66dad676c6a14090d55712093e35ade47.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
        "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/e2/7f/e27f90e9a2ef07b593bd41dbe71184ef46d10609.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
        "alt": "Cotton Shirt Muscle Fit Model",
        "dataAltText": "Cotton Shirt Muscle Fit"
      }
    ],
    "legalText": "",
    "promotionalMarkerText": "",
    "showPromotionalClubMarker": false,
    "showPriceMarker": false,
    "favouritesTracking": "Favourites|0735094011|Cotton Shirt Muscle Fit|MEN_SHOPBYPRODUCT : SHIRTS_SHIRTS : VIEWALL_VIEW_ALL",
    "favouritesSavedText": "SAVED AS FAVOURITE",
    "favouritesNotSavedText": "SAVE AS FAVOURITE",
    "marketingMarkerText": "",
    "marketingMarkerType": "",
    "marketingMarkerCss": "",
    "price": "Rs.1,499.00",
    "redPrice": "",
    "yellowPrice": "",
    "bluePrice": "",
    "clubPriceText": "",
    "sellingAttribute": "",
    "swatchesTotal": "4",
    "swatches": [
      {
        "colorCode": "#272628",
        "articleLink": "/en_in/productpage.0735094011.html",
        "colorName": "Black"
      },
      {
        "colorCode": "#FFFFFF",
        "articleLink": "/en_in/productpage.0735094002.html",
        "colorName": "White"
      },
      {
        "colorCode": "#494C4F",
        "articleLink": "/en_in/productpage.0735094006.html",
        "colorName": "Light grey"
      },
      {
        "colorCode": "#272930",
        "articleLink": "/en_in/productpage.0735094015.html",
        "colorName": "White/Pinstriped"
      }
    ],
    "preAccessStartDate": "",
    "preAccessEndDate": "",
    "preAccessGroups": [],
    "outOfStockText": "",
    "comingSoon": "",
    "brandName": "H&M",
    "damStyleWith": ""
  }])

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer 
      size={"md"}
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={"28px"}>Shopping Cart</DrawerHeader>
          <DrawerBody>
            {
              cartData.length===0 ? <Text fontSize={"20px"}>Your cart is currently empty.</Text> :(cartData.map((item)=>{
               return <CartProduct key={item._id} {...item}/>
              }))
            }
          </DrawerBody>
          <DrawerFooter >
          <DIV>
              <h1>Note</h1>

          </DIV>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const DIV=styled.div`
width: "100%";
`