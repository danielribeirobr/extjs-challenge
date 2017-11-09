Ext.define('AppName.view.main.UserDetail', {
    extend: 'Ext.form.Panel',
    xtype: 'userdetail',
    bodyPadding: 10,

    controller: 'user',
    viewModel: 'userViewModel',

    defaultType: 'textfield',

    items: [{
        fieldLabel: 'First Name',
        name: 'firstname',
        bind: '{rec.firstname}'
    }, {
        fieldLabel: 'Last Name',
        name: 'lastname',
        bind: '{rec.lastname}'
    }, {
        fieldLabel: 'Department',
        name: 'department',
        xtype: 'combobox',
        store: ['Consultant', 'Managment', 'Staff'],
        bind: '{rec.department}'
    }, {
        fieldLabel: 'Email',
        name: 'email',
        vtype: 'email',
        bind: '{rec.email}'
    }, {
        fieldLabel: 'Login',
        name: 'login',
        bind: '{rec.login}'
    }, {
        fieldLabel: 'Status',
        xtype: 'combobox',
        store: ['active', 'inactive'],
        bind: '{rec.status}'
    }, {
        xtype: 'toolbar',
        items: [
            '->',
            {
                xtype: 'button',
                text: 'Submit',
                handler: 'btnSaveItem'
            },
            {
                xtype: 'button',
                text: 'Cancel',
                handler: 'btnCancel'
            }
        ]
    }]
});
