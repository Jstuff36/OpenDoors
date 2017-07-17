## Component Hierarchy

**Bolded** components are associated with routes.

* **AuthFormContainer**
 * AuthForm

* **App**
  * **NewUser**
    * SignUpForm
    * LoginUser
  * **LoginUser**
    * LoginForm
    * NewUser
  * **ListingsIndex**
    * SearchFilter
    * MenuBar
      * **UserProfile**
      * LogOut
    * DisplayMap
      * AddHostingLocations
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
  * **component:** `LoginUser` **path:** `Login`
  * **component:** `NewUser` **path:** `new-user`
  * **component:** `ListingsIndex` **path:** `index`
  * **component:** `UserProfile` **path:** `user/:userid`
    * **component:** `UpcomingTrips` **path:** `user-trips`
    * **component:** `EditUserProfile` **path** `edit-user-profile`
  * **component:** `HostProfile` **path:** `host/:hostid`
    * **component:** `HostInformation` **path:** `host-info`
    * **component:** `HostLocation` **path:** `host-location`
