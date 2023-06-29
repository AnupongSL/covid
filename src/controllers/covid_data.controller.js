const covidDataService = require('../services/covid_data.service')

/**
 * @swagger
 * /covid/getdataall:
 *   get:
 *     summary: Returns all data
 *     tags: [Covid Data]
 *     responses:
 *       200:
 *         description: List of all registered users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Covid-CovidResponse'
 *       404:
 *         description: Registration information not found
 */
exports.getCovidDataAll = async (req, res) => {
    const result = await covidDataService.servGetCovidDataAll()
    if(result != ""){
        res.status(200).json(result)
    }else {
        res.status(404).json({msg: `ไม่พบข้อมูลผู้มาลงทะเบียน`})
    }
}

/**
 * @swagger
 * /covid/getdata/{id}:
 *   get:
 *     summary: Returns Covid Data By ID
 *     tags: [Covid Data]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The Covid Data ID
 *     responses:
 *       200:
 *         description: The list of the Covid Data By ID
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Covid-CovidResponse'
 *       404:
 *         description: Registration information not found
 */
exports.getCovidDataByID = async (req, res) => {
    const id = req.params.id
    const result = await covidDataService.servGetCovidDataByID(id)
    if(result != ""){
        res.status(200).json(result)
    }else {
        res.status(404).json({msg: `ไม่พบข้อมูลผู้มาลงทะเบียน`})
    }
}

/**
 * @swagger
 * /covid/getdatabyfname:
 *   post:
 *     summary: Returns Covid Data By Name
 *     tags: [Covid Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Covid-CovidByNameRequest'
 *     responses:
 *       200:
 *         description: The list of the Covid Data By FirstName
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Covid-CovidResponse'
 *       404:
 *         description: Registration information not found
 */
exports.getCovidDataByFirstName = async (req, res) => {
    const fname = req.body.fname
    const result = await covidDataService.servGetCovidDataByFirstName(fname)
    if(result != ""){
        res.status(200).json(result)
    }else {
        res.status(404).json({msg: `ไม่พบข้อมูลผู้มาลงทะเบียน`})
    }
}

/**
 * @swagger
 * /covid/getdatabylname:
 *   post:
 *     summary: Returns Covid Data By Lastname
 *     tags: [Covid Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Covid-CovidByLastNameRequest'
 *     responses:
 *       200:
 *         description: The list of the Covid Data By Lastname
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Covid-CovidResponse'
 *       404:
 *         description: Registration information not found
 */
exports.getCovidDataByLastName = async (req, res) => {
    const lname = req.body.lname
    const result = await covidDataService.servGetCovidDataByLastName(lname)
    if(result != ""){
        res.status(200).json(result)
    }else {
        res.status(404).json({msg: `ไม่พบข้อมูลผู้มาลงทะเบียน`})
    }
}

/**
 * @swagger
 * /covid/getdatabyidcard:
 *   post:
 *     summary: Returns Covid Data By ID Card
 *     tags: [Covid Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Covid-CovidByIDcardRequest'
 *     responses:
 *       200:
 *         description: The list of the Covid Data By ID Card
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Covid-CovidResponse'
 *       404:
 *         description: Registration information not found
 */
exports.getCovidDataByIDcard = async (req, res) => {
    const id_card = req.body.id_card
    const result = await covidDataService.servGetCovidDataByIDcard(id_card)
    if(result != ""){
        res.status(200).json(result)
    }else {
        res.status(404).json({msg: `ไม่พบข้อมูลผู้มาลงทะเบียน`})
    }
}

/**
 * @swagger
 * /covid/getdatabysubdistrict:
 *   post:
 *     summary: Returns Covid Data By Sub District
 *     tags: [Covid Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Covid-CovidBySubDistrictRequest'
 *     responses:
 *       200:
 *         description: The list of the Covid Data By Sub District
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Covid-CovidResponse'
 *       404:
 *         description: Registration information not found
 */
exports.getCovidDataBySubDistrict = async (req, res) => {
    const sub_district = req.body.sub_district
    const result = await covidDataService.servGetCovidDataBySubDistrict(sub_district)
    if(result != ""){
        res.status(200).json(result)
    }else {
        res.status(404).json({msg: `ไม่พบข้อมูลผู้มาลงทะเบียน`})
    }
}

/**
 * @swagger
 * /covid/getdatabydistrict:
 *   post:
 *     summary: Returns Covid Data By District
 *     tags: [Covid Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Covid-CovidByDistrictRequest'
 *     responses:
 *       200:
 *         description: The list of the Covid Data By District
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Covid-CovidResponse'
 *       404:
 *         description: Registration information not found
 */
exports.getCovidDataByDistrict = async (req, res) => {
    const district = req.body.district
    const result = await covidDataService.servGetCovidDataByDistrict(district)
    if(result != ""){
        res.status(200).json(result)
    } else {
        res.status(404).json({msg: `ไม่พบข้อมูลผู้มาลงทะเบียน`})
    }
}

/**
 * @swagger
 * /covid/getdatabycounty:
 *   post:
 *     summary: Returns Covid Data By Country
 *     tags: [Covid Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Covid-CovidByCountryRequest'
 *     responses:
 *       200:
 *         description: The list of the Covid Data By Country
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Covid-CovidResponse'
 *       404:
 *         description: Registration information not found
 */
exports.getCovidDataByCountry = async (req, res) => {
    const country = req.body.country
    const result = await covidDataService.servGetCovidDataByCountry(country)
    if(result != ""){
        res.status(200).json(result)
    }else {
        res.status(404).json({msg: `ไม่พบข้อมูลผู้มาลงทะเบียน`})
    }
}

/**
 * @swagger
 * /covid/getdatabypostal:
 *   post:
 *     summary: Returns Covid Data By Postal
 *     tags: [Covid Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Covid-CovidByPostalRequest'
 *     responses:
 *       200:
 *         description: The list of the Covid Data By Postal
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Covid-CovidResponse'
 *       404:
 *         description: Registration information not found
 */
exports.getCovidDataByPostal = async (req, res) => {
    const postal = req.body.postal
    const result = await covidDataService.servGetCovidDataByPostal(postal)
    if(result != ""){
        res.status(200).json(result)
    }else {
        res.status(404).json({msg: `ไม่พบข้อมูลผู้มาลงทะเบียน`})
    }
}

/**
 * @swagger
 * /covid/getdatabyage:
 *   post:
 *     summary: Returns Covid Data By Age
 *     tags: [Covid Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Covid-CovidByAgeRequest'
 *     responses:
 *       200:
 *         description: The list of the Covid Data By Age
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Covid-CovidResponse'
 *       404:
 *         description: Registration information not found
 */
exports.getCovidDataByAge = async (req, res) => {
    const age = req.body.age
    const result = await covidDataService.servGetCovidDataByAge(age)
    if(result != ""){
        res.status(200).json(result)
    }else {
        res.status(404).json({msg: `ไม่พบข้อมูลผู้มาลงทะเบียน`})
    }
}

/**
 * @swagger
 * /covid/getdatabybetweenage:
 *   post:
 *     summary: Returns Covid Data By BetweenAge
 *     tags: [Covid Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Covid-CovidByBetweenAgeRequest'
 *     responses:
 *       200:
 *         description: The list of the Covid Data By BetweenAge
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Covid-CovidResponse'
 *       404:
 *         description: Registration information not found
 */
exports.getCovidDataByBetweenAge = async (req, res) => {
    const age_start = req.body.age_start
    const age_stop = req.body.age_stop
    const result = await covidDataService.servGetCovidDataByBetweenAge(age_start, age_stop)
    if(result != ""){
        res.status(200).json(result)
    }else {
        res.status(404).json({msg: `ไม่พบข้อมูลผู้มาลงทะเบียน`})
    }
}

/**
 * @swagger
 * /covid/getdatabyheight:
 *   post:
 *     summary: Returns Covid Data By Height
 *     tags: [Covid Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Covid-CovidByHeightRequest'
 *     responses:
 *       200:
 *         description: The list of the Covid Data By Height
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Covid-CovidResponse'
 *       404:
 *         description: Registration information not found
 */
exports.getCovidDataByHeight = async (req, res) => {
    const height = req.body.height
    const result = await covidDataService.servGetCovidDataByHeight(height)
    if(result != ""){
        res.status(200).json(result)
    }else {
        res.status(404).json({msg: `ไม่พบข้อมูลผู้มาลงทะเบียน`})
    }
}

/**
 * @swagger
 * /covid/getdatabybetweenheight:
 *   post:
 *     summary: Returns Covid Data By BetweenHeight
 *     tags: [Covid Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Covid-CovidByBetweenHeightRequest'
 *     responses:
 *       200:
 *         description: The list of the Covid Data By BetweenHeight
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Covid-CovidResponse'
 *       404:
 *         description: Registration information not found
 */
exports.getCovidDataByBetweenHeight = async (req, res) => {
    const height_start = req.body.height_start
    const height_stop = req.body.height_stop
    const result = await covidDataService.servGetCovidDataByBetweenHeight(height_start, height_stop)
    if(result != ""){
        res.status(200).json(result)
    }else {
        res.status(404).json({msg: `ไม่พบข้อมูลผู้มาลงทะเบียน`})
    }
}

/**
 * @swagger
 * /covid/getdatabyweight:
 *   post:
 *     summary: Returns Covid Data By Weight
 *     tags: [Covid Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Covid-CovidByWeightRequest'
 *     responses:
 *       200:
 *         description: The list of the Covid Data By Weight
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Covid-CovidResponse'
 *       404:
 *         description: Registration information not found
 */
exports.getCovidDataByWeight = async (req, res) => {
    const weight = req.body.weight
    const result = await covidDataService.servGetCovidDataByWeight(weight)
    if(result != ""){
        res.status(200).json(result)
    }else {
        res.status(404).json({msg: `ไม่พบข้อมูลผู้มาลงทะเบียน`})
    }
}

/**
 * @swagger
 * /covid/getdatabybetweenweight:
 *   post:
 *     summary: Returns Covid Data By BetweenWeight
 *     tags: [Covid Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Covid-CovidByBetweenWeightRequest'
 *     responses:
 *       200:
 *         description: The list of the Covid Data By BetweenWeight
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Covid-CovidResponse'
 *       404:
 *         description: Registration information not found
 */
exports.getCovidDataByBetweenWeight = async (req, res) => {
    const weight_start = req.body.weight_start
    const weight_stop = req.body.weight_stop
    const result = await covidDataService.servGetCovidDataByBetweenWeight(weight_start, weight_stop)
    if(result != ""){
        res.status(200).json(result)
    }else {
        res.status(404).json({msg: `ไม่พบข้อมูลผู้มาลงทะเบียน`})
    }
}

/**
 * @swagger
 * /covid/getdatabydate:
 *   post:
 *     summary: Returns Covid Data By Date
 *     tags: [Covid Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Covid-CovidByDateRequest'
 *     responses:
 *       200:
 *         description: The list of the Covid Data By Date
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Covid-CovidResponse'
 *       404:
 *         description: Registration information not found
 */
exports.getCovidDataByDate = async (req, res) => {
    const date = req.body.date
    const result = await covidDataService.servGetCovidDataByDate(date)
    if(result != ""){
        res.status(200).json(result)
    }else {
        res.status(404).json({msg: `ไม่พบข้อมูลผู้มาลงทะเบียน`})
    }
}

/**
 * @swagger
 * /covid/getdatabybetweendate:
 *   post:
 *     summary: Returns Covid Data By BetweenDate
 *     tags: [Covid Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Covid-CovidByBetweenDateRequest'
 *     responses:
 *       200:
 *         description: The list of the Covid Data By BetweenDate
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Covid-CovidResponse'
 *       404:
 *         description: Registration information not found
 */
exports.getCovidDataByBetweenDate = async (req, res) => {
    const date_start = req.body.date_start
    const date_stop = req.body.date_stop
    const result = await covidDataService.servGetCovidDataByBetweenDate(date_start, date_stop)
    if(result != ""){
        res.status(200).json(result)
    }else {
        res.status(404).json({msg: `ไม่พบข้อมูลผู้มาลงทะเบียน`})
    }
}

/**
 * @swagger
 * /covid/addcoviddata:
 *   post:
 *     summary: Add data for people who register for COVID-19
 *     tags: [Covid Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Covid-RegisterRequest'
 *     responses:
 *       201:
 *         description: The information of the registered person has been successfully added.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Covid-RegisterResponse'
 */
exports.addCovidData = async (req, res) => {
    const id_card = req.body.id_card
    await covidDataService.servAddCovidData(req.body, id_card);
    res.status(201).json({msg: `เพิ่มข้อมูลผู้มาลงทะเบียนเรียบร้อยแล้ว`})
}

/**
 * @swagger
 * /covid/updatecoviddata/{id}:
 *   put:
 *     summary: Update registration information
 *     tags: [Covid Data]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Covid Information ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Covid-UpdateRequest'
 *     responses:
 *       200:
 *         description: Information of registered users has been updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Covid-UpdateResponse'
 *       404:
 *         description: Could not find user information to update.
 */
exports.updateCovidData = async (req, res) => {
    const id = req.params.id
    const result = await covidDataService.servGetCovidDataByID(id)
    if(result != ""){
        await covidDataService.servUpdateCovidData(req.body, id);
        res.status(200).json({msg: `อัพเดตข้อมูลผู้มาลงทะเบียนเรียบร้อยแล้ว`})
    }else {
        res.status(404).json({msg: `ไม่พบข้อมูลผู้ใช้ที่จะอัพเดต`})
    }
};


exports.deleteCovidData = async (req, res) => {
    const id = req.params.id
    const result = await covidDataService.servGetCovidDataByID(id)
    if(result != ""){
        await covidDataService.servDeleteCovidData(id);
        res.status(200).json({msg: `ลบข้อมูลผู้มาลงทะเบียนเรียบร้อยแล้ว`})
    }else {
        res.status(404).json({msg: `ไม่พบข้อมูลผู้ใช้ที่จะลบ`})
    }
};

/**
 * @swagger
 * tags:
 *   name: Covid Data
 *   description: Covid Data management API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Covid-RegisterRequest:
 *       type: object
 *       required:
 *         - fname
 *         - lname
 *         - id_card
 *         - age
 *         - height
 *         - weight
 *         - sub_district
 *         - district
 *         - country
 *         - postal
 *       properties:
 *         fname:
 *           type: string
 *           description: Name of the registered person
 *         lname:
 *           type: string
 *           description: Lastname of the registered person
 *         id_card:
 *           type: string
 *           description: ID Card of the registered person
 *         age:
 *           type: number
 *           description: Age of the registered person
 *         height:
 *           type: number
 *           description: Height of the registered person
 *         weight:
 *           type: number
 *           description: Weight of the registered person
 *         sub_district:
 *           type: string
 *           description: Sub District of the registered person
 *         district:
 *           type: string
 *           description: District of the registered person
 *         country:
 *           type: string
 *           description: Country of the registered person
 *         postal:
 *           type: string
 *           description: Postal of the registered person
 * 
 *     Covid-RegisterResponse:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: The information of the registered person has been successfully added.
 * 
 *     Covid-UpdateRequest:
 *       type: object
 *       properties:
 *         fname:
 *           type: string
 *           description: Name of the registered person
 *         lname:
 *           type: string
 *           description: Lastname of the registered person
 *         age:
 *           type: number
 *           description: Age of the registered person
 *         height:
 *           type: number
 *           description: Height of the registered person
 *         weight:
 *           type: number
 *           description: Weight of the registered person
 *         sub_district:
 *           type: string
 *           description: Sub District of the registered person
 *         district:
 *           type: string
 *           description: District of the registered person
 *         country:
 *           type: string
 *           description: Country of the registered person
 *         postal:
 *           type: string
 *           description: Postal of the registered person
 *     Covid-UpdateResponse:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: Information of registered users has been updated.
 * 
 *     Covid-CovidByNameRequest:
 *       type: object
 *       required:
 *         - fname
 *       properties:
 *         fname:
 *           type: string
 *           description: Name of the registered person
 * 
 *     Covid-CovidByLastNameRequest:
 *       type: object
 *       required:
 *         - lname
 *       properties:
 *         lname:
 *           type: string
 *           description: Lastname of the registered person
 * 
 *     Covid-CovidByIDcardRequest:
 *       type: object
 *       required:
 *         - id_card
 *       properties:
 *         id_card:
 *           type: string
 *           description: ID Card of the registered person
 * 
 *     Covid-CovidBySubDistrictRequest:
 *       type: object
 *       required:
 *         - sub_district
 *       properties:
 *         sub_district:
 *           type: string
 *           description: Sub District of the registered person
 * 
 *     Covid-CovidByDistrictRequest:
 *       type: object
 *       required:
 *         - district
 *       properties:
 *         district:
 *           type: string
 *           description: District of the registered person
 * 
 *     Covid-CovidByCountryRequest:
 *       type: object
 *       required:
 *         - country
 *       properties:
 *         country:
 *           type: string
 *           description: Country of the registered person
 * 
 *     Covid-CovidByPostalRequest:
 *       type: object
 *       required:
 *         - postal
 *       properties:
 *         postal:
 *           type: string
 *           description: Postal of the registered person
 * 
 *     Covid-CovidByAgeRequest:
 *       type: object
 *       required:
 *         - age
 *       properties:
 *         age:
 *           type: number
 *           description: Age of the registered person
 * 
 *     Covid-CovidByBetweenAgeRequest:
 *       type: object
 *       required:
 *         - age_start
 *         - age_stop
 *       properties:
 *         age_start:
 *           type: number
 *           description: From old age
 *         age_stop:
 *           type: number
 *           description: Until old age
 * 
 *     Covid-CovidByHeightRequest:
 *       type: object
 *       required:
 *         - height
 *       properties:
 *         height:
 *           type: number
 *           description: Height of the registered person
 * 
 *     Covid-CovidByBetweenHeightRequest:
 *       type: object
 *       required:
 *         - height_start
 *         - height_stop
 *       properties:
 *         height_start:
 *           type: number
 *           description: From Height
 *         height_stop:
 *           type: number
 *           description: To Height
 * 
 *     Covid-CovidByWeightRequest:
 *       type: object
 *       required:
 *         - weight
 *       properties:
 *         weight:
 *           type: number
 *           description: Weight of the registered person
 * 
 *     Covid-CovidByBetweenWeightRequest:
 *       type: object
 *       required:
 *         - weight_start
 *         - weight_stop
 *       properties:
 *         weight_start:
 *           type: number
 *           description: From Weight
 *         weight_stop:
 *           type: number
 *           description: To Weight
 * 
 *     Covid-CovidByDateRequest:
 *       type: object
 *       required:
 *         - date
 *       properties:
 *         date:
 *           type: date
 *           description: Date of the registered person
 * 
 *     Covid-CovidByBetweenDateRequest:
 *       type: object
 *       required:
 *         - date_start
 *         - date_stop
 *       properties:
 *         date_start:
 *           type: date
 *           description: From Date
 *         date_stop:
 *           type: date
 *           description: To Date
 * 
 *     Covid-CovidResponse:
 *       type: object
 *       properties:
 *         fname:
 *           type: string
 *           description: Name of the registered person
 *         lname:
 *           type: string
 *           description: Lastname of the registered person
 *         age:
 *           type: number
 *           description: Age of the registered person
 *         height:
 *           type: number
 *           description: Height of the registered person
 *         weight:
 *           type: number
 *           description: Weight of the registered person
 *         sub_district:
 *           type: string
 *           description: Sub District of the registered person
 *         district:
 *           type: string
 *           description: District of the registered person
 *         country:
 *           type: string
 *           description: Country of the registered person
 *         postal:
 *           type: string
 *           description: Postal of the registered person
 *         date:
 *           type: date
 *           description: Date of the registered person
 */