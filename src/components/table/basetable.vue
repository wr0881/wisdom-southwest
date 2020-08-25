<template>
    <div class="table-wrap">
        <table class="base-table">
            <slot></slot>
            <tbody>
                <tr v-for="(item,index) in list" :key="index">
                    
                </tr>
            </tbody>
        </table>
    </div>
</template>