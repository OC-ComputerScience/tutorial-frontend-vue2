<template>
    <div>
        <v-app-bar
            app
        >
        <router-link :to="{ name: 'tutorials' }">
            <v-img
                class="mx-2"
                src="../assets/oc-logo-white.png"
                max-height="50"
                max-width="50"
                contain
            ></v-img>
        </router-link>
            <v-toolbar-title class="title">
                <div>{{ this.title }}</div>    
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn 
                    exact
                    :to="{ name: 'tutorials' }"
                    text
                >
                    List
                </v-btn>
                <v-btn 
                    exact
                    :to="{ name: 'add' }"
                    text
                >
                    Add
                </v-btn>
            </v-toolbar-items>
            <v-menu
                bottom
                min-width="200px"
                rounded
                offset-y
                v-if="user != null"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        x-large
                        v-on="on"
                        v-bind="attrs"
                    >
                        <v-avatar 
                            v-if="user != null"
                            color="secondary"
                        >
                            <span class="accent--text font-weight-bold">{{ initials }}</span>
                        </v-avatar>
                    </v-btn>
                </template>
                <v-card>
                    <v-list-item-content class="justify-center">
                        <div class="mx-auto text-center">
                            <v-avatar
                                color="secondary"
                                class="mt-2 mb-2"
                            >
                                <span class="accent--text font-weight-bold">{{ initials }}</span>
                            </v-avatar>
                            <h3>{{ name }}</h3>
                            <p class="text-caption mt-1">
                                {{ user.email }}
                            </p>
                            <v-divider class="my-3"></v-divider>
                            <!-- <v-btn
                                depressed
                                rounded
                                text
                                @click="logout()"
                            >
                                Logout
                            </v-btn> -->
                        </div>
                    </v-list-item-content>
                </v-card>
            </v-menu>
        </v-app-bar>
    </div>
</template>

<script>

export default {
    name: 'App',
    data: () => ({
        user: {},
        title: 'Tutorials',
        initials: '',
        name: '',
    }),
    async created() {
        this.user = null
        // ensures that their name gets set properly from store
        // this.user = Utils.getStore('user');
        // if (this.user != null) {
        //     this.title = 'OC Tutoring';
        //     this.initials = this.user.fName[0] + this.user.lName[0];
        //     this.name = this.user.fName + ' ' + this.user.lName;
        // }
    },
    async mounted() {
        // await this.resetMenu();
    },
    computed: {
        // _link() {
        //     return "/" + this.selectedRoles.toLowerCase() + "Home/" + this.currentPersonRoleID;
        // }
    },
    methods: {
    //     menuAction(route) {
    //         if(this.currentPersonRoleID === 0 && (this.selectedRoles === '' || this.selectedRoles === undefined || this.selectedRoles === null)) {
    //             this.$router.push({ name: "login" })
    //         }
    //         else
    //             this.$router.push({ name: route, params: { id: this.currentPersonRoleID }  });
    //     },
    //     async setGroupsAndRoles() {
    //         this.user = Utils.getStore('user');
    //         if (this.user != null) {
    //             this.title = 'OC Tutoring';
    //             this.initials = this.user.fName[0] + this.user.lName[0];
    //             this.name = this.user.fName + ' ' + this.user.lName;
    //             this.groups = [];
    //             this.user.access.forEach(element => {
    //                 this.groups.push(element.name);
    //             });
    //             for (let i = 0; i < this.user.access.length; i++) {
    //                 if (this.selectedGroup === '' || this.selectedGroup === undefined || this.selectedGroup === null) {
    //                         this.selectedGroup = this.user.access[0].name
    //                         this.user.selectedGroup = this.selectedGroup
    //                         Utils.setStore("user", this.user);
    //                 } else
    //                 {
    //                   this.user.selectedGroup = this.selectedGroup
    //                   Utils.setStore("user", this.user);
    //                 }
    //                 if (this.selectedRoles === '' || this.selectedRoles === undefined || this.selectedRoles === null) {
    //                     this.selectedRoles = this.user.access[0].roles[0]
    //                 }
    //                 this.user.selectedRoles = this.selectedRoles
    //                 Utils.setStore("user", this.user);
    //                 await this.getPersonRoles();
    //             }
    //         }
    //         else this.title = '';
    //     },
    //     async resetMenu() {
    //         this.user = Utils.getStore('user');
    //         if (this.user !== null) {
    //             await this.getIncompletePersonRoles()
    //             .then(async () => {
    //                 if(this.incompleteGroups.length === 0) {
    //                     await this.getIncompleteTopics()
    //                     .then(async () => {
    //                         if (this.hasTopics) {
    //                             await this.setGroupsAndRoles()
    //                             .then(() => {
    //                                 if (this.selectedGroup === '' && this.user.selectedGroup === undefined)
    //                                 {
    //                                     this.selectedGroup = this.groups[0];
    //                                     this.user.selectedGroup = this.selectedGroup
    //                                     Utils.setStore("user", this.user);
    //                                 }
    //                                 else if (this.selectedGroup === '')
    //                                     this.selectedGroup = this.user.selectedGroup;

    //                                 if (this.user != null && this.currentPersonRoleID !== 0 && (this.selectedRoles !== '' && this.selectedRoles !== undefined && this.selectedRoles !== null)) {
    //                                     this.activeMenus = this.menus;
    //                                     this.activeMenus = this.menus.filter(menu =>
    //                                         menu.roles.includes(this.selectedRoles),
    //                                     );
    //                                     if (this.selectedRoles.includes("Student"))
    //                                         this.limitStudentMenu();
    //                                     else if (this.selectedRoles.includes("Tutor"))
    //                                         this.limitTutorMenu();
    //                                     else if (this.selectedRoles.includes("Admin"))
    //                                         this.limitAdminMenu();
    //                                 } 
    //                                 else {
    //                                     this.activeMenus = this.menus.filter(menu =>
    //                                         menu.roles.includes('None'),
    //                                     );
    //                                 } 
    //                                 this.menuAction(this.activeMenus[0].name);
    //                             })
    //                         }
    //                         else {
    //                             if (this.user != null) {
    //                                 this.title = 'OC Tutoring';
    //                                 this.initials = this.user.fName[0] + this.user.lName[0];
    //                                 this.name = this.user.fName + ' ' + this.user.lName;
    //                             }
    //                             this.$router.push({ name: "tutorTopics" });
    //                         }
    //                     })
    //                 }
    //                 else if(this.incompleteGroups.length !== 0) {
    //                     if (this.user != null) {
    //                         this.title = 'OC Tutoring';
    //                         this.initials = this.user.fName[0] + this.user.lName[0];
    //                         this.name = this.user.fName + ' ' + this.user.lName;
    //                     }
    //                     this.$router.push({ name: "contract" });
    //                 }
    //             })
    //             .catch ((error) => {
    //               if (error == 401) {
    //                 console.log("Not authorized")
    //                 this.logout();
    //                 this.$router.push({ name: "login" })
    //               }
    //             })
    //         }
    //     },
    //     async getIncompletePersonRoles() {
    //         await GroupServices.getIncompleteGroupsForPerson(this.user.userID)
    //         .then((response) => {
    //             this.incompleteGroups = [];
    //             for (let i = 0; i < response.data.length; i++) {
    //                 let group = response.data[i];
    //                 this.incompleteGroups.push(group);
    //             }
    //         })
    //         .catch((error) => {
    //             if (error.response.status == 401) {
    //                 console.log("error: "+error.response.status)
    //                 this.logout();
    //                 this.$router.push({ name: "login" })
    //                 throw 401;
    //             }
    //             console.log("There was an real error:",error.response.status);
    //         });
    //     },
    //     async getIncompleteTopics() {
    //         await GroupServices.getGroupTopicsForTutor(this.user.userID)
    //         .then(response => {
    //             this.hasTopics = true;
    //             for (let i = 0; i < response.data.length && this.hasTopics; i++) {
    //                 let group = response.data[i];
    //                 if (group.topic.length === 0) {
    //                     this.hasTopics = false;
    //                 }
    //             }
    //         })
    //         .catch(error => {
    //           if (error.response.status == 401) {
    //                 console.log("error: "+error.response.status)
    //                 this.logout();
    //                 this.$router.push({ name: "login" })
    //                 throw 401;
    //             }
    //             console.log("There was an error:", error.response)
    //         });
    //     },
    //     async getPersonRoles() {
    //         await GroupServices.getGroupsForPerson(this.user.userID)
    //         .then((response) => {
    //             for (let i = 0; i < response.data.length; i++) {
    //                 let group = response.data[i];
    //                 if (this.selectedGroup.includes(group.name)) {
    //                     for (let j = 0; j < group.role.length; j++) {
    //                         let role = group.role[j];
    //                         if(this.selectedRoles.includes(role.type)) {
    //                             this.currentPersonRoleID = role.personrole[0].id;
    //                         }
    //                     }
    //                 }
    //             }
    //         })
    //         .catch((error) => {
    //             if (error.response.status == 401) {
    //                 console.log("error: "+error.response.status)
    //                 this.logout();
    //                 this.$router.push({ name: "login" })
    //                 throw 401;
    //             }
    //             console.log("There was an error:", error.response);
    //         });
    //     },
    //     goToRightInfo() {
    //         if (this.selectedRoles.includes("Student"))
    //             this.$router.push({ name: "studentInfo"});
    //         else if (this.selectedRoles.includes("Tutor"))
    //             this.$router.push({ name: "tutorInfo"});
    //         else if (this.selectedRoles.includes("Admin"))
    //             this.$router.push({ name: "adminInfo"});
    //     },
    //     logout() {
    //         AuthServices.logoutUser(this.user)
    //         .then(response => {
    //             console.log(response);
    //             Utils.removeItem('user')
    //             this.$router.go();
    //             this.$router.push({ name: "login"})
    //         })
    //         .catch(error => {
    //             console.log('error', error);
    //         })
    //     },
    //     async limitTutorMenu() {
    //         if(this.selectedRoles.includes('tutor') || this.selectedRoles.includes('Tutor')) {
    //             let approved = false;
    //             await PersonRoleServices.getPersonRole(this.currentPersonRoleID)
    //             .then((response) => {
    //                 if(response.data.status.includes("approved") || response.data.status.includes("Approved"))
    //                 {
    //                     approved = true;
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.log("There was an error:", error.response);
    //             });

    //             if(!approved) {
    //                 // makes only tutor home page show up on menu bar
    //                 this.activeMenus = this.activeMenus.filter(menu =>
    //                     menu.name.includes("tutorHome"));
    //             }
    //         }
    //     },
    //     async limitStudentMenu() {
    //         if(this.selectedRoles.includes('student') || this.selectedRoles.includes('Student')) {
    //             let approved = false;
    //             await PersonRoleServices.getPersonRole(this.currentPersonRoleID)
    //             .then((response) => {
    //                 if(response.data.status.includes("approved") || response.data.status.includes("Approved"))
    //                 {
    //                     approved = true;
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.log("There was an error:", error.response);
    //             });

    //             if(!approved) {
    //                 // makes only student home page show up on menu bar
    //                 this.activeMenus = this.activeMenus.filter(menu =>
    //                     menu.name.includes("studentHome"));
    //             }
    //         }
    //     },
    //     async limitAdminMenu() {
    //         if(this.selectedRoles.includes('admin') || this.selectedRoles.includes('Admin')) {
    //             let approved = false;
    //             await PersonRoleServices.getPersonRole(this.currentPersonRoleID)
    //             .then((response) => {
    //                 if(response.data.status.includes("approved") || response.data.status.includes("Approved"))
    //                 {
    //                     approved = true;
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.log("There was an error:", error.response);
    //             });

    //             if(!approved) {
    //                 // makes only admin home page show up on menu bar
    //                 this.activeMenus = this.activeMenus.filter(menu =>
    //                     menu.name.includes("adminHome"));
    //             }
    //         }
    //     }
     },
};
</script>
