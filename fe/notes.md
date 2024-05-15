### Routes ###

## HOME
    path="/"

  # Includes
        landing page
        get started button
        signin/signup/signout button
        mylinks link

## SIGNIN
    path="/signin"

  # Includes
        signin form and button        

## SIGNUP
    path="/signup"

  # Includes
        signup form and button

## RESET PASSWORD
    path="/reset-password/:vToken"

  # Includes
        reset password form and button

## PROFILE
    path="/profile/:id"

  # Includes
        profile info
        edit profile info on the fly
        delete profile button

## MY LINKS
    path="/mylinks"

  # Includes
        social links if any and view link button / create social link button
        creative links if any and view link button / create creative link button

## CREATE SOCIAL LINKS
    path="/create/social"

  # Includes
        create link form and button

## CREATE CREATIVE LINKS
    path="/create/creative"

  # Includes
        create link form and button

## VIEW SPECIFIC SOCIAL LINKS
    path="/social/:id"

  # Includes
        link card
        edit link on the fly
        share link button
        delete link button

## VIEW SPECIFIC CREATIVE LINKS
    path="/creative/:id"

  # Includes
        link card
        edit link on the fly
        share link button
        delete link button

## USER SPECIFIC SOCIAL CARD LINK
    path="/cs/:id"

  # Includes
        card with social link info
        share button

## USER SPECIFIC CREATIVE CARD LINK
    path="/mc/:id"

  # Includes
        card with creative link info
        share button