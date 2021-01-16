import ApiService from "@/services/api.service";
const url = "buscar";
export const service = {
    getAll() {
        return ApiService.get(url, { id: "buscar" });
    },
    get(id) {
        return ApiService.get(url, { id: id });
    },
    create(params) {
        return ApiService.post(url, { params: params });
    },
    update(id, params) {
        return ApiService.update(url, { id: id, params: params });
    },
    destroy(id) {
        return ApiService.delete(url, { id: id });
    },
};
export default service;
