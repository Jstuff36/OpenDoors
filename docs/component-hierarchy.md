## Component Hierarchy

**Bolded** components are associated with routes.

* **AuthFormContainer**
 * AuthForm

* **App**
  * **NewUser**
    * SignUpForm
  * **LoginUser**
    * LoginForm
  * **ListingsIndex**
    * SearchFilter
    * MenuBar
      * **UserProfile**
      * LogOut
    * DisplayMap
      * AddHostingLocations
    * **HostProfileScroll**
      * HostInfo
    * **HostProfile**
      * HostInfo
  * **HostProfile**
    * **HostInformation**
      * HostInfo
    * **HostRefrences**
      * HostRefrences
    * **HostLocation**
      * HostLocation
    * MenuBar
      * **UserProfile**
      * LogOut
  * **UserProfile**
    * UserInfo
    * UserMenuBar
    * **UpcomingTrips**
      * UsersUpcomingTrips
      * UsersRefrences
    * **EditUserProfile**
      * EditUsersProfile

## Routes

* **component:** `App` **path:** `/`
  * **component:** `LoginUser` **path:** `login`
  * **component:** `SignUp` **path:** `sign-up`
  * **component:** `ListingsIndex` **path:** `index`
  * **component:** `UserProfile` **path:** `user/:userid`
    * **component:** `UpcomingTrips` **path:** `trips`
    * **component:** `EditUserProfile` **path** `edit-profile`
  * **component:** `HostProfile` **path:** `host/:hostid`
    * **component:** `HostInformation` **path:** `info`
    * **component:** `HostLocation` **path:** `location`
